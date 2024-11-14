'use client'

import { httpClient } from "@/adapters";
import { CarteiraService } from "./carteiraService";
import { DespesaService, RendaService } from "./registroService";
import { UserService } from "./userService";


export type ServiceResponse = {
  type: "success" | "error"
  message: string
}


export const userService = new UserService(httpClient.axios)
export const carteiraService = new CarteiraService(httpClient.axios)
export const rendaService = new RendaService(httpClient.axios)
export const despesaService = new DespesaService(httpClient.axios)