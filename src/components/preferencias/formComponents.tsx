'use client'

import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

//eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormProps = {
  form: any
  fieldName: string
  label: string
  readOnly?: boolean
  type?: string
}


export function PreferenciasInputFormField({ form, fieldName, label, type, readOnly=false }: Readonly<FormProps>) {
  return(
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={fieldName}>
            <span className="text-slate-500/50">{label}</span>
          </FormLabel>
          <FormControl>
            <Input
              className="bg-slate-200" readOnly={readOnly}
              type={type}  placeholder={label} {...field}></Input>
          </FormControl>
        </FormItem>
      )}
    />
  )
}

type PreferenciasSwitchFormFieldProps = {
  form: any
  fieldName: string
  label: string
  options: string[]
}

export function PreferenciasSwitchFormField({ form, fieldName, label, options }: Readonly<PreferenciasSwitchFormFieldProps>) {
  return(
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={fieldName}>
            <span className="text-slate-500/50" hidden>{label}</span>
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={"Tema"}/>
                </SelectTrigger>
            </FormControl>
            <SelectContent >
              {options.map((option, index) => (
                <SelectItem key={index} value={option}>{option}</SelectItem>)
              )}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}
