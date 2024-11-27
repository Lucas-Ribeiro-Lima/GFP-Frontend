'use client'

import { httpClient } from "@/adapters";
import { DespesaProps, RendaProps } from "@/domain/types";
import { CarteiraService } from "./carteiraService";
import { RegistroService } from "./registroService";
import { UserService } from "./userService";


export type ServiceResponse = {
  type: "success" | "error"
  message: string
}


export const userService = new UserService(httpClient.axios)
export const carteiraService = new CarteiraService(httpClient.axios)
export const rendaService = new RegistroService<RendaProps>(httpClient.axios, "renda")
export const despesaService = new RegistroService<DespesaProps>(httpClient.axios, "despesa")