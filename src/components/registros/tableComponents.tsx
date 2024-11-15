import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
	DialogContent as DialogContentShadcn,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "../ui/dialog";

import { Table } from "@tanstack/react-table";


import { ChevronDown } from "lucide-react";

import Link from "next/link";
import { useCallback, useState } from "react";

export function LinkCell({ uuid }: { uuid: string }) {
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


export function TopContentTable<T>({ table }: { table: Table<T> }) {
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

export function DialogDeleteContent({ uuid, service }: DialogDeleteContentProps) {	
	const [ processing, setProcessing ] = useState(false)
	
	const onClick = useCallback(async () => {
		setProcessing(true)
		await service(uuid)
		setProcessing(false)
	}, [service])

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

export function DialogContent({ type = "Inclusão", title, children }: DialogEditContentProps) {
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
