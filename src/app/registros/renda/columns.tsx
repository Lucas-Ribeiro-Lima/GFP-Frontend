"use client"

import { Registro } from "@/components/registros"
import { RendaProps } from "@/domain/types"
import { formatCurrency } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"


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
 {
  id: "actions",
  header: "Ações",
  cell: ({ row }) => {
    const renda = row.original
    return (
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:text-sky-500 focus-visible:ring-0">
              <MoreHorizontal className="h-4 w-4 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              <Link href={`/registros/renda/${renda.uuid}`}>
                <DropdownMenuItem  className="cursor-pointer">
                    Editar
                </DropdownMenuItem>
              </Link>
            <DropdownMenuSeparator />
            <DialogTrigger asChild>
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
          <Registro.TableComponents.Dialog onSubmit={() => {}}/>
        </DropdownMenu>
      </Dialog>
    )
  },  
}
]