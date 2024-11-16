import { DespesaProps } from "@/domain/types"
import { DespesaService } from "@/services/registroService"
import { useCallback, useEffect, useState } from "react"
import { useCustomToast } from "./useCustomToast"
import { ColumnsDespesa } from "@/components/registros/despesa/columnsDespesa"

export function useDespesa(service: DespesaService) {
  const { toaster } = useCustomToast()
  const [ despesas, setDespesas ] = useState<DespesaProps[]>([])
  const [ valorTotal, setValorTotal ] = useState<number>(0)

  useEffect(() => {
    const loadDespesa = async () => {
      const response = await service.load()
      setDespesas(response)
    }
    loadDespesa() 
  }, [service])
  
  useEffect(() => {
    const total = despesas.reduce((acc, despesa) => acc + despesa.valor, 0)
    setValorTotal(total)
  }, [despesas])

  const criarDespesa = useCallback(async (despesa: DespesaProps) => {
    const { type, message } = await service.create(despesa)

    toaster({ type, message})
    if (type === "success") await service.load().then(setDespesas)
  }, [service, toaster])

  const atualizarDespesa = useCallback(async (despesa: DespesaProps) => {
    const { type, message } = await service.patch(despesa)

    toaster({ type, message })
    if (type === "success") await service.load().then(setDespesas)
  }, [service, toaster])

  const deletarDespesa = useCallback(async (uuid: string) => {
    const { type, message } = await service.delete(uuid)

    toaster({ type, message })
    if (type === "success") await service.load().then(setDespesas)
  }, [service, toaster])  

  const acoes = {
    criarDespesa,
    atualizarDespesa,
    deletarDespesa,
  }

  const columns = ColumnsDespesa({ editSubmit: atualizarDespesa, deleteSubmit: deletarDespesa })

  return { despesas, valorTotal, columns, acoes }
}