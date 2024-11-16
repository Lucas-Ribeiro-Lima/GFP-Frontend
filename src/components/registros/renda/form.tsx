'use client'

import { FormComponents } from "@/components/registros/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CarteiraContext } from "@/contexts/carteiraContext";
import { useCallback, useContext, useMemo, useState } from "react";

import { rendaFormSchema } from "@/adapters/zod/registros";
import { RendaProps } from "@/domain/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type RendaFormProps = {
  renda?: RendaProps
  service: (values: RendaProps) => Promise<void>
}

export function RendaForm({ renda, service }: Readonly<RendaFormProps>) {
  const { id } = useContext(CarteiraContext)
  const [ processing, setProcessing ] = useState(false)

  const form = useForm<RendaProps>({
    resolver: zodResolver(rendaFormSchema),
    defaultValues: {
      uuid: renda?.uuid || "00000000-0000-0000-0000-000000000000",
      idCarteira: id || undefined,
      descricao: renda?.descricao ||"",
      fonte: renda?.fonte || "",
      valor: renda?.valor || 0.00,
      categoria: renda?.categoria || "outros",
      frequencia: renda?.frequencia || "mensal",
      modalidade: renda?.modalidade || "fixo",
      competencia: {
        mes: renda?.competencia.mes || new Date().getMonth(),
        ano: renda?.competencia.ano || new Date().getFullYear(),
        dataInclusao: renda?.competencia.dataInclusao || new Date().toLocaleDateString("pt-BR")
      }
    },

  })

  const categoriaArray = useMemo(() => [
    {
     value: "salario",
     label: "Salário"
    },
    {
      value: "aluguel",
      label: "Aluguel"
    },
    {
      value: "premio",
      label: "Prêmio"
    },
    {
      value: "outros",
      label: "Outros"
    }
  ], [])

  const onSubmit = useCallback(async (values: RendaProps) => {
    setProcessing(true)
    await service(values)
    setProcessing(false)
  }, [service])

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-8"
      >
        <div className="text-sm text-zinc-400">{form.getValues("uuid")}</div>
        <div className="flex gap-2">
          <FormComponents.DescricaoInput 
            form={form}
            fieldName="descricao"
            label="Descrição" 
            description="Descrição da sua renda"/>
          <FormComponents.ValorInput 
            form={form} 
            fieldName="valor"  
            label="Valor"
            description="Valor"/>
        </div>
        <div className="flex gap-2">
          <FormComponents.CategoriaSelector 
            form={form} 
            fieldName="categoria" 
            label="Categoria"
            description="Categoria"
            valores={categoriaArray}
            />
          <FormComponents.FrequenciaSelector
            form={form}
            fieldName="frequencia"
            label="Frequência"
            description="Frequência"/>
          <FormComponents.ModalidadeRadioGroup
            form={form}
            fieldName="modalidade"
            label="Tipo"
            description="Tipo"
          />
        </div>
        <FormComponents.CompetenciaSelector
          form={form}
          fieldName="competencia"
          description="competencia"
        />
        <div className="flex justify-between">
          <div className="text-sm text-zinc-400">Data de inclusão: {form.getValues("competencia.dataInclusao")}</div>
          <Button type="submit" disabled={processing}>Cadastrar</Button>
        </div>
      </form>
    </Form>
  )
}