'use client'

import axios from "axios"
import { AxiosHttpClient } from "./axios/axiosHttpClient"

export const axiosDefault = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  withCredentials: true
})

const axiosHttpClient = new AxiosHttpClient(axiosDefault)

export const httpClient = {
  axios: axiosHttpClient
}