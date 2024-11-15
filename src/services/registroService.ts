import { HttpClient } from "@/adapters/httpClient"
import { DespesaProps, RendaProps } from "@/domain/types"
import { ServiceResponse } from "."


export interface RendaContract {
  load: () => Promise<RendaProps[] | []>
  create: (data: RendaProps) => Promise<ServiceResponse>
  patch: (data: RendaProps) => Promise<ServiceResponse>
  delete: (uuid: string) => Promise<ServiceResponse>
}

export interface DespesaContract {
  load: () => Promise<DespesaProps[] | []>
  create: (data: DespesaProps) => Promise<ServiceResponse>
  patch: (data: DespesaProps) => Promise<ServiceResponse>
  delete: (uuid: string) => Promise<ServiceResponse>
}

export class RendaService implements RendaContract {
  constructor(private client: HttpClient) {}

  async load(): Promise<RendaProps[] | []> {
    const { status, data } = await this.client.request<RendaProps[] | []>({
      method: "GET",
      url: "/renda/buscar"
    })

    if(!data) {
      return []
    }
    if(status === 200 ) {
      return data 
    } else {
      return []
    } 
  }

  async create(data: RendaProps): Promise<ServiceResponse> {
    const { status } = await this.client.request({
      method: "POST",
      url: "/renda/criar",
      content: {
        renda: data
      }
    })

    if(status === 201) {
      return {
        type: "success",
        message: "Renda cadastrada com sucesso"
      }
    } else {
      return {
        type: "error",
        message: "Erro ao cadastrar renda"
      }
    }
  }

  async patch(data: RendaProps): Promise<ServiceResponse> {
    const { status } = await this.client.request({
      method: "PATCH",
      url: "/renda/atualizar",
      content: {
        renda: data
      }
    })

    if(status === 200) {
      return {
        type: "success",
        message: "Renda atualizada com sucesso"
      }
    } else {
      return {
        type: "error",
        message: "Erro ao atualizar renda"
      }
    }
  }
  
  async delete(uuid: string): Promise<ServiceResponse> {
    const body = {
      uuid
    }

    const { status } = await this.client.request({
      method: "DELETE",
      url: "/renda/excluir",
      content: body
    })

    if(status === 204) {
      return {
        type: "success",
        message: "Renda excluida com sucesso"
      }
    } else {
      return {
        type: "error",
        message: "Erro ao excluir renda"
      }
    }
  }
}


export class DespesaService implements DespesaContract {
  constructor(private client: HttpClient) {}

  async load(): Promise<DespesaProps[] | []> {
    const { status, data } = await this.client.request<DespesaProps[] | []>({
      method: "GET",
      url: "/despesa/buscar"
    })

    if(!data) {
      return []
    }
    if(status === 200 ) {
      return data 
    } else {
      return []
    } 
  }

  async create(data: DespesaProps): Promise<ServiceResponse> {
    const { status } = await this.client.request({
      method: "POST",
      url: "/despesa/criar",
      content: {
        despesa: data
      }
    })

    if(status === 201) {
      return {
        type: "success",
        message: "Despesa cadastrada com sucesso"
      }
    } else {
      return {
        type: "error",
        message: "Erro ao cadastrar Despesa"
      }
    }
  }

  async patch(data: DespesaProps): Promise<ServiceResponse> {
    const { status } = await this.client.request({
      method: "PATCH",
      url: "/despesa/atualizar",
      content: {
        despesa: data
      }
    })

    if(status === 200) {
      return {
        type: "success",
        message: "Despesa atualizada com sucesso"
      }
    } else {
      return {
        type: "error",
        message: "Erro ao atualizar Despesa"
      }
    }
  }
  
  async delete(uuid: string): Promise<ServiceResponse> {
    const body = {
      uuid
    }

    const { status } = await this.client.request({
      method: "DELETE",
      url: "/despesa/excluir",
      content: body
    })

    if(status === 204) {
      return {
        type: "success",
        message: "Despesa excluida com sucesso"
      }
    } else {
      return {
        type: "error",
        message: "Erro ao excluir despesa"
      }
    }
  }
}
