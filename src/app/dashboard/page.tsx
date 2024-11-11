'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AuthContext } from "@/contexts/authContext"
import { ChevronDownCircle, CircleCheck, DollarSign, WalletMinimal } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"

export default function Page() {
  const { user, logoff } = useContext(AuthContext)

  const userInitials = user?.nome?.replace(/(\b\w)\w*.*\b(\w)\w*/g, '$1$2').toUpperCase()

  return (
    <div className="flex flex-col h-full p-4 bg-gradient-to-br from-slate-100 via-sky-100 to-slate-100">
      <nav className="flex w-full justify-end">
        <ol className="flex gap-4 text-sm text-slate-600">
          <li className="hover:text-sky-500 cursor-pointer"><Link href="#">Rendas</Link></li>
          <li className="hover:text-sky-500 cursor-pointer"><Link href="#">Despesas</Link></li>
          <li className="hover:text-sky-500 cursor-pointer"><Link href="#">Preferências</Link></li>
          <li className="hover:text-sky-500 cursor-pointer">        
            <button onClick={logoff}>Sair</button>
          </li>
        </ol>
      </nav>
      <div className="flex flex-col flex-1">
        <header className="flex gap-2 items-center pl-12">
          <Avatar className="border-black/80 border-[1px]">
            <AvatarImage src="https://github.com/Lucas-Ribeiro-Lima.png"></AvatarImage>
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
        <h1>Bem vindo,<span className="font-semibold pl-2">{user?.nome||"Usuário"}</span></h1> 
        </header>
        <main className="flex flex-col flex-1">
          <div className="m-8 mt-4 mb-0">
            <div className="flex justify-between">
              <h1 className="flex gap-2">Resumo de
                <span className="flex gap-2 font-semibold">
                  Novembro
                  <ChevronDownCircle className="cursor-pointer"/>
                </span>
              </h1>
              <div className="flex gap-2">expandir <ChevronDownCircle className="cursor-pointer"/></div>
            </div>
            <section className="grid grid-cols-3 gap-2 mt-2">
              <p className="flex gap-2 items-center p-2 rounded-md bg-slate-300/60">
                <div className=" h-4/5 aspect-square">
                  <DollarSign className="h-full w-full text-green-400 bg-green-900/90 rounded-sm"></DollarSign>
                </div>
                <div>
                  <div className="text-md">Rendas</div> 
                  <div><strong>R$ 1.900,00</strong></div>
                </div>
              </p>
              <p className="flex gap-2 items-center p-2 rounded-md bg-slate-300/60">
                <div className=" h-4/5 aspect-square">
                  <DollarSign className="h-full w-full text-red-400 bg-red-900/90 rounded-sm"></DollarSign>
                </div>
                <div>
                  <div className="text-md">Despesas</div> 
                  <div><strong>R$ 250,00</strong></div>
                </div>
              </p>
              <p className="flex gap-2 items-center p-2 rounded-md bg-slate-300/60">
                <div className="h-4/5 aspect-square">
                  <CircleCheck className="h-full w-full text-sky-400 bg-sky-900/90 rounded-sm"></CircleCheck>
                </div>
                <div>
                  <div className="text-md">Total</div> 
                  <div><strong>R$ 1.650,00</strong></div>
                </div>
              </p>
            </section>
          </div>
          <div className="flex-1 m-8 p-4 rounded-sm bg-slate-300/60">
            <h1 className="flex gap-2">
              <WalletMinimal/>
              <span className="text-xl">
                minha <strong>carteira</strong>
              </span>
            </h1>
            <section className="flex flex-1 m-2 gap-2">
              <section className="flex-1">
                <h2 className="text-xl font-bold text-sky-700">Renda</h2>
                <div className="grid grid-cols-4 grid-rows-12 bg-slate-300/50 rounded-sm p-2">
                  <div>Nome</div>
                  <div>Data</div>
                  <div>Valor</div>
                  <div>Categoria</div>
                </div>
              </section>
              <section className="flex-1">
                <h2 className="text-xl font-bold text-red-700">Despesa</h2>
                <div className="grid grid-cols-4 grid-rows-12 bg-slate-300/50 rounded-sm p-2">
                  <div>Nome</div>
                  <div>Data</div>
                  <div>Valor</div>
                  <div>Categoria</div>
                </div>
              </section>
            </section>
          </div>
        </main>
      </div>
    </div>)
}