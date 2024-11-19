import { despesaService, rendaService } from "@/services"
import { useDespesa } from "./useDespesa"
import { useRenda } from "./useRenda"
import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DespesaProps, RendaProps } from "@/domain/types"

export function useDashboard() {
  const { despesas, valorTotal: despesaTotal} = useDespesa(despesaService)
  const { rendas, valorTotal: rendaTotal} = useRenda(rendaService)

  const columns: ColumnDef<DespesaProps | RendaProps>[] = useMemo(() =>[
    {
      header: 'Descrição',
      accessorKey: 'descricao'
    },
    {
      header: 'Valor',
      accessorKey: 'valor'
    },
    {
      header: 'Categoria',
      accessorKey: 'categoria'
    },
    {
      header: 'Data',
      accessorKey: 'data'
    },
    {
      header: 'Tipo',
      accessorKey: 'modalidade'
    }
  ], [])


  const totalRegistros = useMemo(() => rendaTotal - despesaTotal, [despesaTotal, rendaTotal])

  const dados = {
    columns,
    despesas,
    rendas,
  }

  const totals = {
    registros: totalRegistros,
    rendas: rendaTotal,
    despesas: despesaTotal,
  }
  

  return { dados, totals }
}