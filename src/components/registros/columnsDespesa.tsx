"use client"

import { Registro } from "@/components/registros"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { DespesaProps } from "@/domain/types"
import { formatCurrency, getMonthIndex } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { useState } from "react"

type ColumsDespesaProps = {
  editSubmit: (despesa: DespesaProps) => Promise<void>
  deleteSubmit: (uuid: string) => Promise<void>
}

export function ColumnsDespesa({ editSubmit, deleteSubmit }: ColumsDespesaProps) {
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
		cell: ({ row }) => {
			const [ modalOption, setModalOption ] = useState<"edit" | "delete">("edit")

			const despesa = row.original
			return (
				<Dialog>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="h-8 w-8 p-0 hover:text-sky-500 focus-visible:ring-0">
								<MoreHorizontal className="h-4 w-4 " />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DialogTrigger asChild onClick={() => setModalOption("edit")}>
								<DropdownMenuItem  className="cursor-pointer">
										Editar
								</DropdownMenuItem>
							</DialogTrigger>
							<DropdownMenuSeparator />
							<DialogTrigger asChild onClick={() => setModalOption("delete")}>
								<DropdownMenuItem
									className="
										bg-red-500 focus-visible:bg-red-500/90 hover:bg-red-500/90
										focus-visible:text-white text-white
										cursor-pointer"
								>
									Excluir
								</DropdownMenuItem>
							</DialogTrigger>
						</DropdownMenuContent>
						{ modalOption === "delete" && (
							<Registro.TableComponents.DialogDelete uuid={despesa.uuid} service={deleteSubmit}/>
						)}
						{ modalOption === "edit" && (
							<Registro.TableComponents.DialogContent type="Edição" title="rendas">
								<Registro.DespesaForm despesa={despesa} service={editSubmit}/>
							</Registro.TableComponents.DialogContent>
						)}
					</DropdownMenu>
				</Dialog>
			)},  
		}
  ]

  return columns
}
