'use client'

import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

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
  checkedOption: string
}

export function PreferenciasSwitchFormField({ form, fieldName, label, checkedOption }: Readonly<PreferenciasSwitchFormFieldProps>) {
  return(
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={fieldName}>
            <span className="text-slate-500/50" hidden>{label}</span>
          </FormLabel>
          <FormControl>
            <div className='flex items-center space-x-4'>
              <span className="text-slate-500/50">Light</span>
              <Switch className="bg-slate-200" checked={fieldName === checkedOption}></Switch>
              <span className="text-slate-500/50">Dark</span>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
