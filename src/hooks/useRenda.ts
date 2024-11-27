import { RendaProps } from "@/domain/types"
import { RegistroContract } from "@/services/registroService"
import { useState, useEffect, useCallback } from "react"
import { useCustomToast } from "./useCustomToast"
import { ColumsRenda } from "@/components/registros/renda/columnsRenda"

export function useRenda(service: Readonly<RegistroContract<RendaProps>>) {
  const { toaster } = useCustomToast()
  const [ rendas, setRendas ] = useState<RendaProps[]>([])
  const [ valorTotal, setValorTotal ] = useState<number>(0)

  useEffect(() => {
    const loadRendas = async () => {
      const response = await service.load()
      setRendas(response)
    }
    loadRendas()
  }, [service])
  
  useEffect(() => {
    const total = rendas.reduce((acc, renda) => acc + renda.valor, 0)
    setValorTotal(total)
  }, [rendas])

  const criarRenda = useCallback(async (renda: RendaProps) => {
    const { type, message } = await service.create(renda)

    toaster({ type, message })
    if (type === "success") await service.load().then(setRendas)
  }, [service, toaster])

  const atualizarRenda = useCallback(async (renda: RendaProps) => {
    const { type, message } = await service.patch(renda)

    toaster({ type, message })
    if (type === "success") await service.load().then(setRendas)
  }, [service, toaster])

  const deletarRenda = useCallback(async (uuid: string) => {
    const { type, message } = await service.delete(uuid)

    toaster({ type, message })
    if (type === "success") await service.load().then(setRendas)
  }, [service, toaster])
  

  const acoes = {
    criarRenda,
    atualizarRenda,
    deletarRenda,
  }

  const columns = ColumsRenda({ editSubmit: atualizarRenda, deleteSubmit: deletarRenda })
  
  return { rendas, columns, valorTotal, acoes }
}