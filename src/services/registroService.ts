import { HttpClient } from "@/adapters/httpClient"
import { ServiceResponse } from "."

type RegistroType = "renda" | "despesa" 

export interface RegistroContract<T> {
  load: () => Promise<T[] | []>
  create: (data: T) => Promise<ServiceResponse>
  patch: (data: T) => Promise<ServiceResponse>
  delete: (uuid: string) => Promise<ServiceResponse>
}

export class RegistroService<T> implements RegistroContract<T> {
  private readonly client:HttpClient
  private readonly recurso: RegistroType
  constructor(client: HttpClient, recurso: RegistroType) {
    this.client = client
    this.recurso = recurso
  }

  async load(): Promise<T[] | []> {
    const { status, data } = await this.client.request<T[] | []>({
      method: "GET",
      url: `/${this.recurso}/buscar`
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

  async create(data:T): Promise<ServiceResponse> {
    const { status } = await this.client.request({
      method: "POST",
      url: `/${this.recurso}/criar`,
      content: {
        [this.recurso]: data
      }
    })

    if(status === 201) {
      return {
        type: "success",
        message: `${this.recurso} cadastrada com sucesso`
      }
    } else {
      return {
        type: "error",
        message: `Erro ao cadastrar ${this.recurso}`	
      }
    }
  }

  async patch(data: T): Promise<ServiceResponse> {
    const { status } = await this.client.request({
      method: "PATCH",
      url: `/${this.recurso}/atualizar`,
      content: {
        [this.recurso]: data
      }
    })

    if(status === 200) {
      return {
        type: `success`,
        message: `${this.recurso} atualizada com sucesso`
      }
    } else {
      return {
        type: `error`,
        message: `Erro ao atualizar ${this.recurso}`
      }
    }
  }


  async delete(uuid: string): Promise<ServiceResponse> {
    const body = {
      uuid
    }

    const { status } = await this.client.request({
      method: "DELETE",
      url: `/${this.recurso}/excluir`,
      content: body
    })

    if(status === 204) {
      return {
        type: `success`,
        message: `${this.recurso} excluida com sucesso`
      }
    } else {
      return {
        type: `error`,
        message: `Erro ao excluir ${this.recurso}`
      }
    }
  }
}