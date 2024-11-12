import { Registro } from "@/components/registros";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function Despesa() {
  return (
    <main className="flex flex-col flex-1">
        <div className="flex flex-1 m-8 p-4 rounded-sm bg-slate-300/50">
          <Registro.Wrapper>
            <Registro.Header title="Despesas">
              <Registro.ActionsWrapper>
                <Registro.Action variant="secondary"></Registro.Action>
                <Registro.Action variant="destructive" disabled>Excluir</Registro.Action>
                <Registro.Action variant="default">
                  <Link href="."><Undo2/></Link>
                </Registro.Action>
              </Registro.ActionsWrapper>
            </Registro.Header>
            <Registro.ContentWrapper>
              <Registro.ContentData>Registro</Registro.ContentData>
            </Registro.ContentWrapper>
          </Registro.Wrapper>    
        </div>
    </main>
  )
}