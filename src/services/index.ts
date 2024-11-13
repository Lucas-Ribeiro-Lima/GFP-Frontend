'use client'

import { httpClient } from "@/adapters";
import { UserService } from "./userService";
import { CarteiraService } from "./carteiraService";


export type ServiceResponse = {
  type: "success" | "error"
  message: string
}


export const userService = new UserService(httpClient.axios)
export const carteiraService = new CarteiraService(httpClient.axios)