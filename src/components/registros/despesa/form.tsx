'use client'

import { despesaFormSchema } from "@/adapters/zod/registros";
import { FormComponents } from '@/components/registros/form/index';
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CarteiraContext } from "@/contexts/carteiraContext";
import { DespesaProps } from "@/domain/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

type DespesaFormProps = {
  despesa?: DespesaProps
  service: (values: DespesaProps) => Promise<void>
}

export function DespesaForm({ despesa, service }: Readonly<DespesaFormProps>) {
  const { id } = useContext(CarteiraContext)
  const [ processing, setProcessing ] = useState(false)

  const form = useForm<DespesaProps>({
    resolver: zodResolver(despesaFormSchema),
    defaultValues: {
      uuid: despesa?.uuid ?? "00000000-0000-0000-0000-000000000000",
      idCarteira: id ?? undefined,
      descricao: despesa?.descricao ?? "",
      valor: despesa?.valor ?? 0.00,
      categoria: despesa?.categoria ?? "outros",
      numParcelas: despesa?.numParcelas ?? 1,
      parcelado: despesa?.parcelado ?? false,
      modalidade: despesa?.modalidade ?? "fixo",
      competencia: {
        mes: despesa?.competencia.mes ?? new Date().getMonth() + 1,
        ano: despesa?.competencia.ano ?? new Date().getFullYear(),
        dataInclusao: despesa?.competencia.dataInclusao ?? new Date().toLocaleDateString("pt-BR")
      }
    },

  })

  const categoriaArray = useMemo(() => [
    {
      value: "alimentacao",
      label: "Alimentação"
    },
    {
      value: "educacao", 
      label: "Educação"
    },
    {
      value: "lazer",
      label: "Lazer"
    },
    {
      value: "moradia",
      label: "Moradia"
    },
    {
      value: "transporte",
      label: "Transporte"
    },
    {
      value: "saude",
      label: "Saúde"
    },
    {
      value: "outros",
      label: "Outros"
    }
  ], [])

  const onSubmit = useCallback(async (values: DespesaProps) => {
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
          <FormComponents.DescricaoInput form={form} fieldName="descricao" label="descrição" description="Descrição da sua despesa"/>
          <FormComponents.ValorInput form={form} fieldName="valor" label="Valor" description="Valor"/>
        </div>
        <div className="flex gap-2">
          <FormComponents.CategoriaSelector form={form} fieldName="categoria" label="Categoria" valores={categoriaArray} description="Categoria" />
          <FormComponents.ModalidadeRadioGroup form={form} fieldName="modalidade" label="Tipo" description="Tipo"/>
        </div>
        <div className="flex space-x-4">
          <FormComponents.BooleanCheckbox form={form} fieldName="parcelado" label="Parcelado" description="Parcelado" />
          <FormComponents.NumInput form={form} fieldName="numParcelas" label="numero de parcelas" description="N° de parcelas"/>
        </div>
        <FormComponents.CompetenciaSelector form={form} fieldName="competencia"/>
        <div className="flex justify-between">
          <div className="text-sm text-zinc-400">Data de inclusão: {form.getValues("competencia.dataInclusao")}</div>
          <Button type="submit" disabled={processing}>Cadastrar</Button>
        </div>
      </form>
    </Form>
  )
}