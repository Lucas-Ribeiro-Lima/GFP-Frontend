import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getMonthIndex } from "@/lib/utils"
import { FieldValues, UseFormReturn } from "react-hook-form"

type FormComponentsProps<T> = {
  form: UseFormReturn<FieldValues>
  fieldName: string
  label: string
  description?: string
}

export function DescricaoInput({ form, fieldName, description, label }: FormComponentsProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="w-3/4">
          <div className="hidden">
            <FormLabel>{label}</FormLabel>
          </div>
          <FormDescription>{description}</FormDescription>
          <FormControl className="bg-white">
            <Input placeholder={`Descrição da sua ${label}`} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export function ValorInput({ form, fieldName, description, label }: FormComponentsProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <div className="hidden">
            <FormLabel>{label}</FormLabel>
          </div>
          <FormDescription>{description}</FormDescription>
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

type CategoriaSelectorProps = FormComponentsProps & {
  valores: Array<{
    value: string
    label: string
  }>
}

export function CategoriaSelector({ form, fieldName, label, description, valores }: CategoriaSelectorProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex-1">
          <div className="hidden">
            <FormLabel>{label}</FormLabel>
          </div>
          <FormDescription>{description}</FormDescription>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="bg-white">
              <SelectTrigger>
                <SelectValue placeholder={`Selecione a categoria da sua ${label}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {valores.map(({value, label}, index) => (
                <SelectItem key={index} value={value}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}


export function FrequenciaSelector({ form, description, label, fieldName }: FormComponentsProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex-1">
          <div className="hidden">
            <FormLabel>{label}</FormLabel>
          </div>
          <FormDescription>{description}</FormDescription>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="bg-white">
              <SelectTrigger>
                <SelectValue placeholder={description} />
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

export function ModalidadeRadioGroup({ form, fieldName, label, description }: FormComponentsProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <div className="hidden">
            <FormLabel>{label}</FormLabel>
          </div>
          <FormDescription>{description}</FormDescription>
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

export function CompetenciaSelector({ form }: FormComponentsProps) {
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

export function NumInput({ form, fieldName, label, description}: FormComponentsProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <div className="hidden">
            <FormLabel>{label}</FormLabel>
          </div>
          <FormDescription>{description}</FormDescription>
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

export function BooleanCheckbox({ form, fieldName, label, description }: FormComponentsProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <div className="hidden">
            <FormLabel>{label}</FormLabel>
          </div>
          <FormDescription>{description}</FormDescription>
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