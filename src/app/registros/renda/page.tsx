import { Dashboard } from "@/components/dashboard";
import { Registro } from "@/components/registros";

export default function Renda() {
  return (
    <main className="flex flex-col flex-1">
        <Dashboard.ResumeWrapper>
          <Dashboard.Title month="Novembro" />
          <Dashboard.TotalWrapper>
            <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Renda" })} dataTitle="Rendas" dataValue="1900" />
          </Dashboard.TotalWrapper>
        </Dashboard.ResumeWrapper>
        <div className="flex flex-1 m-8 p-4 rounded-sm bg-slate-300/50 shadow-md shadow-white">
          <Registro.Wrapper>
            <Registro.Header title="Rendas">
              <Registro.ActionsWrapper>
                <Registro.Action variant="secondary"></Registro.Action>
                <Registro.Action variant="destructive" disabled>Excluir</Registro.Action>
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