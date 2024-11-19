'use client'

import { Wallet } from "@/components/carteira"
import { Dashboard } from "@/components/dashboard"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { AuthContext } from "@/contexts/authContext"
import { useDashboard } from "@/hooks/useDashboard"
import { Registro } from "@/components/registros"
import { useContext } from "react"
import Link from "next/link"

export default function Page() {
  const { user, userInitials, logoff } = useContext(AuthContext)
  const { dados, totals } = useDashboard()

  return (
    <main className="flex flex-col flex-1">
      <Dashboard.ResumeWrapper>
        <Dashboard.Title month="Novembro" />
        <Dashboard.TotalWrapper>
          <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Renda" })} dataTitle="Rendas" dataValue={totals.rendas} />
          <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Despesa" })} dataTitle="Despesas" dataValue={totals.despesas} />
          <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Total" })} dataTitle="Total" dataValue={totals.registros} />
        </Dashboard.TotalWrapper>
      </Dashboard.ResumeWrapper>
      <div className="flex-1 m-8 p-4 rounded-sm bg-slate-300/50 shadow-md shadow-white">
        <Wallet.DataWrapper>
          <Wallet.DataWrapper>
            <Wallet.DataItem>
              <Link href="/registros/renda" className="font-bold text-emerald-700">Rendas</Link> 
              <Registro.DataTable data={dados.rendas} columns={dados.columns}/>
            </Wallet.DataItem>
            <Wallet.DataItem>
              <Link href="/registros/despesa" className="font-bold text-rose-700">Despesas</Link>
              <Registro.DataTable data={dados.despesas} columns={dados.columns} />  
            </Wallet.DataItem>
          </Wallet.DataWrapper>
        </Wallet.DataWrapper>
      </div>
    </main>
  )
}