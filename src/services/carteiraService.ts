import { HttpClient } from "@/adapters/httpClient";
import { CarteiraProps } from "@/domain/types";
import { ServiceResponse } from ".";


export interface CarteiraContract {
  load: () => Promise<CarteiraProps | null>
  create: (idContaDono: number) => Promise<ServiceResponse>
}

export class CarteiraService implements CarteiraContract {
  constructor(private client: HttpClient) {}

  async load(): Promise<CarteiraProps | null> {
    const { status, data } = await this.client.request<CarteiraProps>({
      url: `${process.env.NEXT_PUBLIC_API_URL}/carteira/buscar`,
      method: 'GET'
    })
  
    if(status === 200) {
      return data ? data : null
    } else {
      return null
    }
  }

  async create(idContaDono: number): Promise<ServiceResponse> {
    const carteiraData: { carteira: CarteiraProps} = { 
      carteira: {
        id: 0,
        idContaDono,
        nome: "Carteira Padrão",
        idGrupoEconomico: null,
        saldo: 0,
        meta: 0,
        compartilhada: false,
      }
    }    
    const { status } = await this.client.request({
      url: "/carteira/criar",
      method: 'POST',
      content: carteiraData,
    })

    if(status !== 201) {
      return {
        type: "error",
        message: "Erro ao criar carteira"
      }
    } else {
      return {
        type: "success",
        message: "Carteira criada com sucesso"
      }
    }
  }
}