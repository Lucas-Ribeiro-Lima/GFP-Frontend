import { AxiosError, AxiosInstance } from "axios";
import { HttpClient, HttpRequest, HttpResponse } from "../httpClient";

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly client: AxiosInstance) {}
  
  async request<T>({ url, method, content }: HttpRequest): Promise<HttpResponse<T>> {
    try {
      const { status, data }  = await this.client.request({
        url: url,
        method: method,
        data: (method !== 'GET') ? content : null,
        responseType: "json",
      })
  
      return {
        status,
        data
      }
    } catch (error) {
      const __error = error as AxiosError
      return {
        status: __error.status || 500
      }
    }
  }
}
