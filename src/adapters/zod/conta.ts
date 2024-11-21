import z from 'zod'

export const contaSchema = z.object({
  id: z.number(),
  email: z.string(),
  nome: z.string(),
  cpf: z.string().optional(),
  photo: z.string().optional(),
  configs: z.object({
    tema: z.enum(['Dark', 'Light']),
    displayName: z.string(),
    customWpp: z.string()
  })
})

