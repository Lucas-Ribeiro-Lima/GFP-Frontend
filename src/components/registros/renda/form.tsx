'use client'

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CarteiraContext } from "@/contexts/carteiraContext";
import { useCallback, useContext, useState } from "react";

import { rendaFormSchema } from "@/adapters/zod/registros";
import { RendaProps } from "@/domain/types";
import { getMonthIndex } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type RendaFormProps = {
  renda?: RendaProps
  service: (values: RendaProps) => Promise<void>
}

export function RendaForm({ renda, service }: RendaFormProps) {
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

  function DescricaoInput() {
    return (
      <FormField
        control={form.control}
        name="descricao"
        render={({ field }) => (
          <FormItem className="w-3/4">
            <div className="hidden">
              <FormLabel>Descrição</FormLabel>
            </div>
            <FormDescription>Descrição da sua renda</FormDescription>
            <FormControl className="bg-white">
              <Input placeholder="Descrição de sua renda" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }

  function ValorInput() {
    return (
      <FormField
        control={form.control}
        name="valor"
        render={({ field }) => (
          <FormItem>
            <div className="hidden">
              <FormLabel>Valor</FormLabel>
            </div>
            <FormDescription>Valor:</FormDescription>
            <FormControl className="bg-white">
              <Input
                type="number"
                min={0.00}
                max={100000000.00}
                step={0.01}
                placeholder="R$ 0,00"
                {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }

  function CategoriaSelector() {
    return (
      <FormField
        control={form.control}
        name="categoria"
        render={({ field }) => (
          <FormItem className="flex-1">
            <div className="hidden">
              <FormLabel>Categoria</FormLabel>
            </div>
            <FormDescription>Categoria:</FormDescription>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl className="bg-white">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a categoria da renda" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="salario">Salário</SelectItem>
                <SelectItem value="aluguel">Aluguel</SelectItem>
                <SelectItem value="premio">Prêmio</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    )
  }

  function FrequenciaSelector() {
    return (
      <FormField
        control={form.control}
        name="frequencia"
        render={({ field }) => (
          <FormItem className="flex-1">
            <div className="hidden">
              <FormLabel>Frequencia</FormLabel>
            </div>
            <FormDescription>Frequência:</FormDescription>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl className="bg-white">
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="mensal">Mensal</SelectItem>
                <SelectItem value="trimestral">Trimestral</SelectItem>
                <SelectItem value="semestral">Semestral</SelectItem>
                <SelectItem value="anual">Anual</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    )
  }

  function ModalidadeRadioGroup() {
    return (
      <FormField
        control={form.control}
        name="modalidade"
        render={({ field }) => (
          <FormItem>
            <div className="hidden">
              <FormLabel>Tipo</FormLabel>
            </div>
            <FormDescription>Tipo:</FormDescription>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex-1 items-center"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="fixo" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Fixo
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="variavel" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Variavel
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }

  function CompetenciaSelector() {
    const meses = getMonthIndex()

    return (
      <div className="flex gap-2">
        <FormField
          control={form.control}
          name="competencia.mes"
          render={({ field }) => (
            <FormItem className="flex-1">
              <div className="hidden">
                <FormLabel>Mês</FormLabel>
              </div>
              <FormDescription>Mês:</FormDescription>
              <Select onValueChange={(val) => field.onChange(Number(val))} defaultValue={(field.value + 1).toString()}>
                <FormControl className="bg-white">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o mês"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {meses.map((month, index) => (
                    <SelectItem key={index} value={(index + 1).toString()}>{month}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="competencia.ano"
          render={({ field }) => (
            <FormItem>
              <div className="hidden">
                <FormLabel>Ano</FormLabel>
              </div>
              <FormDescription>Ano:</FormDescription>
              <FormControl className="bg-white">
                <Input
                  type="number"
                  min={2000}
                  max={new Date().getFullYear() + 10}
                  placeholder="2024"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
      </div>
    )
  }

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
          <DescricaoInput />
          <ValorInput />
        </div>
        <div className="flex gap-2">
          <CategoriaSelector />
          <FrequenciaSelector />
          <ModalidadeRadioGroup />
        </div>
        <CompetenciaSelector />
        <div className="flex justify-between">
          <div className="text-sm text-zinc-400">Data de inclusão: {form.getValues("competencia.dataInclusao")}</div>
          <Button type="submit" disabled={processing}>Cadastrar</Button>
        </div>
      </form>
    </Form>
  )
}