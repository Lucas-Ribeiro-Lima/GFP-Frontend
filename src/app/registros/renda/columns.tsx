"use client"

import { Registro } from "@/components/registros"
import { RendaProps } from "@/domain/types"
import { formatCurrency } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<RendaProps>[] = [
 {
  accessorKey: 'uuid',
  header: () => {},
  cell: (cell) => {
    const uuid = String(cell.getValue())
    return (
      <Registro.TableComponents.Link uuid={uuid}/>
    )
  }
 },
 {
  accessorKey: 'descricao',
  header: 'Descrição',
 }, 
 {
  accessorKey: 'valor',
  header: 'Valor',
  cell: (cell) => {
    const valorFormatted = formatCurrency(Number(cell.getValue()))
    return (<>{valorFormatted}</>)
  }
 }, 
 {
  accessorKey: 'categoria',
  header: 'Categoria',
 },
 {
  accessorKey: 'frequencia',
  header: 'Frequencia',
 }, 
 {
  accessorKey: 'modalidade',
  header: 'Modalidade',
 },
 {
  id: "mes",
  accessorKey: 'competencia.mes',
  header: 'Mês',
 }, 
 {
  id: "ano",
  accessorKey: 'competencia.ano',
  header: 'Ano',
 }, 
]