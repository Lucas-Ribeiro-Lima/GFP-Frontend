import z from 'zod'


export const registroSchema = z.object({
  uuid: z.string(),
  idCarteira: z.number(),
  descricao: z.string(),
  valor: z.coerce.number(),
  competencia: z.object({
    mes: z.number(),
    ano: z.number(),
    dataInclusao: z.string().optional()
  }),
  modalidade: z.enum(['fixo', 'variavel'])
})



export const rendaFormSchema =  z.object({
  uuid: z.string(),
  idCarteira: z.number(),
  descricao: z.string({message: "Insira uma descrição para a renda"}),
  valor: z.coerce.number({message: "Insira um valor para a renda"}),
  competencia: z.object({
    mes: z.number(),
    ano: z.number(),
    dataInclusao: z.string()
  }),
  modalidade: z.enum(['fixo', 'variavel']),
  fonte: z.string(),
  frequencia: z.enum(['mensal', 'trimestral', 'semestral', 'anual']),
  categoria: z.enum(['salario', 'aluguel', 'premio', 'outros'])
})


export const despesaFormSchema =  z.object({
  uuid: z.string(),
  idCarteira: z.number(),
  descricao: z.string(),
  valor: z.coerce.number(),
  competencia: z.object({
    mes: z.number(),
    ano: z.number(),
    dataInclusao: z.string()
  }),
  modalidade: z.enum(['fixo', 'variavel']),
  parcelado: z.boolean(),
  numParcelas: z.coerce.number(),
  categoria: z.enum(['alimentacao', 'educacao', 'lazer', 'moradia', 'outros', 'saude', 'transporte'])
})
