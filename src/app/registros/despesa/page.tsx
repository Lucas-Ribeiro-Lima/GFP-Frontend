'use client'

import { Dashboard } from "@/components/dashboard";
import { Registro } from "@/components/registros";
import { useDespesa } from "@/hooks/useDespesa";
import { despesaService } from "@/services";
import { columns } from "./columns";
import { useRouter } from "next/navigation";

export default function Despesa() {
  const { despesas, valorTotal } = useDespesa(despesaService);
  const { push } = useRouter()

  return (
    <main className="flex flex-col flex-1">
        <Dashboard.ResumeWrapper>
          <Dashboard.Title month="Novembro" />
          <Dashboard.TotalWrapper>
            <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Despesa" })} dataTitle="Despesas" dataValue={valorTotal} />
          </Dashboard.TotalWrapper>
        </Dashboard.ResumeWrapper>
        <div className="flex flex-1 m-8 p-4 rounded-sm bg-slate-300/50 shadow-md shadow-white">
          <Registro.Wrapper>
            <Registro.Header title="Despesas">
              <Registro.ActionsWrapper>
                <Registro.Action variant="secondary" onClick={() => push("despesa/0")}>
                  Adicionar
                </Registro.Action>
              </Registro.ActionsWrapper>
            </Registro.Header>
            <Registro.ContentWrapper>
              <Registro.ContentData>
                <Registro.DataTable  columns={columns} data={despesas}></Registro.DataTable>
              </Registro.ContentData>
            </Registro.ContentWrapper>
          </Registro.Wrapper>    
        </div>
    </main>
  )
}