import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
	Dialog,
	DialogContent as DialogContentShadcn,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "../ui/dialog";
import { Row, Table } from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { DespesaProps, RendaProps } from "@/domain/types";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Registro } from ".";

export function LinkCell({ uuid }: Readonly<{ uuid: string }>) {
	return(
		<Link 
		href={`/registros/renda/${uuid}`} 
		className="
			flex items-center
			w-2/5 aspect-square rounded-full
			bg-sky-700 hover:bg-sky-600 hover:ring-2 hover:ring-white
			shadow-md shadow-white "
		/>  
	)
}

export function TopContentTable<T>({ table }: Readonly<{ table: Table<T> }>) {
	return(
		<div className="flex items-center justify-between">
			<div className="flex gap-2">
				<div className="flex items-center py-4">
					<Input
						placeholder="Filtrar descrição..."
						value={(table.getColumn("descricao")?.getFilterValue() as string) ?? ""}
						onChange={(event) =>
							table.getColumn("descricao")?.setFilterValue(event.target.value)
						}
						className="max-w-sm bg-white focus-visible:ring-none"
					/>
				</div>
				<div className="flex items-center py-4">
					<Input
						placeholder="Filtrar categoria..."
						value={(table.getColumn("categoria")?.getFilterValue() as string) ?? ""}
						onChange={(event) =>
							table.getColumn("categoria")?.setFilterValue(event.target.value)
						}
						className="max-w-sm bg-white focus-visible:ring-none"
					/>
				</div>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="
							shadow-none
							hover:border-none 
							focus-visible:ring-transparent
							hover:text-sky-500
						">
						<ChevronDown/>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{table
						.getAllColumns()
						.filter(
							(column) => column.getCanHide()
						)
						.map((column) => {
							return (
								<DropdownMenuCheckboxItem
									key={column.id}
									className="capitalize"
									checked={column.getIsVisible()}
									onCheckedChange={(value) =>
										column.toggleVisibility(!!value)
									}
								>
									{column.id}
								</DropdownMenuCheckboxItem>
							)
						})}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

type DialogDeleteContentProps = {
	uuid: string
	service: (uuid: string) => Promise<void>
}

export function DialogDeleteContent({ uuid, service }:  Readonly<DialogDeleteContentProps>) {	
	const [ processing, setProcessing ] = useState(false)
	
	const onClick = useCallback(async () => {
		setProcessing(true)
		await service(uuid)
		setProcessing(false)
	}, [service, uuid])

	return(
		<DialogContentShadcn>
			<DialogHeader>
				<DialogTitle>Confirme a exclusão</DialogTitle>
				<DialogDescription>
					Essa ação não pode ser desfeita. Você tem certeza que deseja
					deletar esse registro?
				</DialogDescription>
			</DialogHeader>
			<DialogFooter>
				<div className="text-sm text-zinc-400">{uuid}</div>
				<Button type="button" onClick={onClick} disabled={processing}>Confirm</Button>
			</DialogFooter>
  	</DialogContentShadcn>
	)
}

type DialogEditContentProps = {
	type?: "Edição" | "Inclusão"
	title: string,
	children: React.ReactNode
}

export function DialogContent({ type = "Inclusão", title, children }:  Readonly<DialogEditContentProps>) {
	return(
		<DialogContentShadcn>
			<DialogTitle>{type} de {title}</DialogTitle>
			<div className="hidden">
				<DialogDescription>{type} de {title}</DialogDescription>
			</div>
			{children}	
		</DialogContentShadcn>
	)
}

type ActionsRowProps<T> = {
	deleteSubmit: (uuid: string) => Promise<void>
	editSubmit: (data: T) => Promise<void>
}

export function RendaActionRows({ editSubmit, deleteSubmit }: Readonly<ActionsRowProps<RendaProps>>) {
	const [ modalOption, setModalOption ] = useState<"edit" | "delete">("edit")
	const row = ({ row }: { row: Row<RendaProps>}) => {
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
					<Registro.TableComponents.DialogDelete uuid={renda.uuid} service={deleteSubmit}/>
				)}
				{ modalOption === "edit" && (
					<Registro.TableComponents.DialogContent type="Edição" title="rendas">
						<Registro.RendaForm renda={renda} service={editSubmit}/>
					</Registro.TableComponents.DialogContent>
				)}
			</DropdownMenu>
		</Dialog>
	)}
	return row
}

export function DespesaActionRows({ editSubmit, deleteSubmit }: Readonly<ActionsRowProps<DespesaProps>>) {
	const [ modalOption, setModalOption ] = useState<"edit" | "delete">("edit")
	const row =  ({ row }: { row: Row<DespesaProps>}) => {
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
	)}
	return row
}