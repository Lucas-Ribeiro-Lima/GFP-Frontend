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
import { Checkbox } from "@/components/ui/checkbox"
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

import { despesaFormSchema } from "@/adapters/zod/registros";
import { DespesaProps } from "@/domain/types";
import { getMonthIndex } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type DespesaFormProps = {
  despesa?: DespesaProps
  service: (values: DespesaProps) => Promise<void>
}

export function DespesaForm({ despesa, service }: DespesaFormProps) {
  const { id } = useContext(CarteiraContext)
  const [ processing, setProcessing ] = useState(false)

  const form = useForm<DespesaProps>({
    resolver: zodResolver(despesaFormSchema),
    defaultValues: {
      uuid: despesa?.uuid || "00000000-0000-0000-0000-000000000000",
      idCarteira: id || undefined,
      descricao: despesa?.descricao ||"",
      valor: despesa?.valor || 0.00,
      categoria: despesa?.categoria || "outros",
      numParcelas: despesa?.numParcelas || 1,
      parcelado: despesa?.parcelado || false,
      modalidade: despesa?.modalidade || "fixo",
      competencia: {
        mes: despesa?.competencia.mes || new Date().getMonth(),
        ano: despesa?.competencia.ano || new Date().getFullYear(),
        dataInclusao: despesa?.competencia.dataInclusao || new Date().toLocaleDateString("pt-BR")
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
            <FormDescription>Descrição da sua despesa</FormDescription>
            <FormControl className="bg-white">
              <Input placeholder="Descrição de sua despesa" {...field} />
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

  function NumParcelasInput() {
    return (
      <FormField
        control={form.control}
        name="numParcelas"
        render={({ field }) => (
          <FormItem>
            <div className="hidden">
              <FormLabel>N° de parcelas</FormLabel>
            </div>
            <FormDescription>N° de parcelas:</FormDescription>
            <FormControl className="bg-white">
              <Input
                type="number"
                min={1}
                max={64}
                placeholder="1 parcela"
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
                  <SelectValue placeholder="Selecione a categoria da despesa" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="alimentacao">Alimentação</SelectItem>
                <SelectItem value="educacao">Educação</SelectItem>
                <SelectItem value="lazer">Lazer</SelectItem>
                <SelectItem value="moradia">Moradia</SelectItem>
                <SelectItem value="transporte">Tranporte</SelectItem>
                <SelectItem value="saude">Saúde</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    )
  }

  function ParceladoCheckbox() {
    return (
      <FormField
        control={form.control}
        name="parcelado"
        render={({ field }) => (
          <FormItem>
            <div className="hidden">
              <FormLabel>Parcelado</FormLabel>
            </div>
            <FormDescription>Parcelado:</FormDescription>
            <FormControl>
              <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
            </FormControl>
            <FormMessage />
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
          <DescricaoInput />
          <ValorInput />
        </div>
        <div className="flex gap-2">
          <CategoriaSelector />
          <ModalidadeRadioGroup />
        </div>
        <div className="flex space-x-4">
          <ParceladoCheckbox />
          <NumParcelasInput />
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