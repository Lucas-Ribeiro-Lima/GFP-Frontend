import { Registro } from "@/components/registros"
import { DespesaProps } from "@/domain/types"
import { formatCurrency, getMonthIndex } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"

type ColumsDespesaProps = {
  editSubmit: (despesa: DespesaProps) => Promise<void>
  deleteSubmit: (uuid: string) => Promise<void>
}

export function ColumnsDespesa({ editSubmit, deleteSubmit }: Readonly<ColumsDespesaProps>) {
  const columns: ColumnDef<DespesaProps>[] = [
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
    accessorKey: "parcelado",
    header: "Parcelado",
    cell: (cell) => {
      const isParcelado = Boolean(cell.getValue())
      return (
        <>{isParcelado ? "Sim" : "Não"}</>
      )
    }
   },
   {
    accessorKey: "numParcelas",
    header: "Parcelas",
   },
   {
    accessorKey: 'categoria',
    header: 'Categoria',
   },
  
   {
    accessorKey: 'modalidade',
    header: 'Modalidade',
   },
   {
   id: "mes",
   accessorKey: 'competencia.mes',
   header: 'Mês',
   cell: (row) => {
     const index = getMonthIndex()
     return (<>{index[Number(row.getValue()) - 1]}</>)
   }
   }, 
   {
    id: "ano",
    accessorKey: 'competencia.ano',
    header: 'Ano',
   }, 
   {
		id: "actions",
		header: "Ações",
		cell: Registro.TableComponents.ActionsRows.Despesa({editSubmit, deleteSubmit})
   }
  ]

  return columns
}
