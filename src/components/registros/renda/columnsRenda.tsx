import { Registro } from "@/components/registros"
import { RendaProps } from "@/domain/types"
import { formatCurrency, getMonthIndex } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"

type ColunsRendaProps = {
	deleteSubmit: (uuid: string) => Promise<void>
	editSubmit: (renda: RendaProps) => Promise<void>
}

export function ColumsRenda({ editSubmit, deleteSubmit }: Readonly<ColunsRendaProps>) {	
	const columns: ColumnDef<RendaProps>[] = 
	[
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
		cell: Registro.TableComponents.ActionsRows.Renda({editSubmit, deleteSubmit}) 
		}
	]

	return columns
}