'use client'

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import { useContext } from "react";

import { rendaFormSchema } from "@/adapters/zod/registros";
import { RendaProps } from "@/domain/types";
import { getMonthIndex } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function RendaForm() {
  const { id } = useContext(CarteiraContext)
  
  const form = useForm<RendaProps>({
    resolver: zodResolver(rendaFormSchema),
    defaultValues: {
      uuid: "00000000-0000-0000-0000-000000000000",
      idCarteira: id || undefined,
      fonte: "",
      categoria: "outros",
      frequencia: "mensal",
      modalidade: "fixo",
      competencia: {
        mes: new Date().getMonth(),
        ano: new Date().getFullYear(),
      },
    }
  })

  function DescricaoInput() {
    return(
      <FormField
      control={form.control}
      name="descricao"
      render={({ field }) => (
        <FormItem className="w-3/4">
          <FormLabel>Descrição</FormLabel>
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
    return(
      <FormField
      control={form.control}
      name="valor"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Valor</FormLabel>
          <FormControl className="bg-white">
            <Input 
              type="number" 
              min={"0.00"} 
              max={"100000000.00"} 
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
    return(
        <FormField 
        control={form.control}
        name="categoria"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Categoria</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl className="bg-white">
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="salario">Salário</SelectItem>
                <SelectItem value="aluguel">Aluguêl</SelectItem>
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
    return(
        <FormField 
        control={form.control}
        name="frequencia"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Frequencia</FormLabel>
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
    return(
      <FormField
          control={form.control}
          name="modalidade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo: </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center"
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
                      <RadioGroupItem value="variavel"/>
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

    return(
      <div className="flex gap-2">
        <FormField 
          control={form.control}
          name="competencia.mes"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Mês</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={(field.value + 1).toString()}>
                <FormControl className="bg-white">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
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
            <FormLabel>Ano</FormLabel>
            <FormControl className="bg-white">
              <Input 
                type="number" 
                min={"0.00"} 
                max={new Date().getFullYear() + 10} 
                step={0.01} 
                placeholder="2024"
                {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>
      </div>
    )
  }


  return(
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-8">
          <div className="flex gap-2">
            <DescricaoInput/>
            <ValorInput/>
          </div>
          <div className="flex gap-2">
            <CategoriaSelector/>
            <FrequenciaSelector/>
          </div>
          <CompetenciaSelector/>
          <ModalidadeRadioGroup/>
          <div className="flex justify-between">
            <div></div>
            <Button type="submit">Cadastrar</Button>
          </div>
      </form>
    </Form>
  )
}