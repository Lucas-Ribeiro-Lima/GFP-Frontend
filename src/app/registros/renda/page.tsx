'use client'

import { Dashboard } from "@/components/dashboard";
import { Registro } from "@/components/registros";
import { useRenda } from "@/hooks/useRenda";
import { rendaService } from "@/services";

export default function Renda() {
  const {  rendas, columns, valorTotal, acoes: { criarRenda }  } = useRenda(rendaService);

  // const rendasMock: RendaProps[] = [
  //   {
  //     uuid: '558a2291-6c20-44c1-b699-37a077ead39f',
  //     descricao: 'Salário',
  //     valor: 2000,
  //     categoria: 'salario',
  //     frequencia: 'trimestral',
  //     modalidade: 'fixo',
  //     fonte: "",
  //     idCarteira: 1,
  //     competencia: { mes: 11, ano: 2021, dataInclusao: new Date().toString() }
  //   },
  // ]

  return (
    <main className="flex flex-col flex-1">
        <Dashboard.ResumeWrapper>
          <Dashboard.Title month="Novembro" />
          <Dashboard.TotalWrapper>
            <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Renda" })} dataTitle="Rendas" dataValue={valorTotal} />
          </Dashboard.TotalWrapper>
        </Dashboard.ResumeWrapper>
        <div className="flex flex-1 m-8 p-4 rounded-sm bg-slate-300/50 shadow-md shadow-white">
          <Registro.Wrapper>
            <Registro.Header title="Rendas">
              <Registro.ActionsWrapper>
                <Registro.ActionContent>Adicionar</Registro.ActionContent>      
                <Registro.TableComponents.DialogContent title="rendas">
                  <Registro.RendaForm service={criarRenda}/>
                </Registro.TableComponents.DialogContent>
              </Registro.ActionsWrapper>
            </Registro.Header>
            <Registro.ContentWrapper>
              <Registro.ContentData>
                <Registro.DataTable  columns={columns} data={rendas}></Registro.DataTable>
              </Registro.ContentData>
            </Registro.ContentWrapper>
          </Registro.Wrapper>    
        </div>
    </main>
  )
}