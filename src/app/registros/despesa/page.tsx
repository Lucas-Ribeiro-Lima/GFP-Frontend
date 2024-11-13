import { Dashboard } from "@/components/dashboard";
import { Registro } from "@/components/registros";
import { columns } from "./columns";
import { DespesaProps } from "@/domain/types";

export default function Despesa() {
  const mockData: DespesaProps[] = [
    {
      uuid: "0",
      idCarteira: 1,
      descricao: "Moradia",
      valor: 250,
      modalidade: "fixo",
      categoria: "alimentacao",
      competencia: { mes: 10, ano: 2024, dataInclusao: "2024-10-01" },
    },
    {
      uuid: "0",
      idCarteira: 1,
      descricao: "Moradia",
      valor: 250,
      modalidade: "fixo",
      categoria: "alimentacao",
      competencia: { mes: 10, ano: 2024, dataInclusao: "2024-10-01" },
    },
    {
      uuid: "0",
      idCarteira: 1,
      descricao: "Moradia",
      valor: 250,
      modalidade: "fixo",
      categoria: "alimentacao",
      competencia: { mes: 10, ano: 2024, dataInclusao: "2024-10-01" },
    },
    {
      uuid: "0",
      idCarteira: 1,
      descricao: "Moradia",
      valor: 250,
      modalidade: "fixo",
      categoria: "alimentacao",
      competencia: { mes: 10, ano: 2024, dataInclusao: "2024-10-01" },
    },
  ];

  return (
    <main className="flex flex-col flex-1">
        <Dashboard.ResumeWrapper>
          <Dashboard.Title month="Novembro" />
          <Dashboard.TotalWrapper>
            <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Despesa" })} dataTitle="Despesas" dataValue="250" />
          </Dashboard.TotalWrapper>
        </Dashboard.ResumeWrapper>
        <div className="flex flex-1 m-8 p-4 rounded-sm bg-slate-300/50 shadow-md shadow-white">
          <Registro.Wrapper>
            <Registro.Header title="Despesas">
              <Registro.ActionsWrapper>
                <Registro.Action variant="secondary"></Registro.Action>
                <Registro.Action variant="destructive" disabled>Excluir</Registro.Action>
              </Registro.ActionsWrapper>
            </Registro.Header>
            <Registro.ContentWrapper>
              <Registro.ContentData>
                <Registro.DataTable  columns={columns} data={mockData}></Registro.DataTable>
              </Registro.ContentData>
            </Registro.ContentWrapper>
          </Registro.Wrapper>    
        </div>
    </main>
  )
}