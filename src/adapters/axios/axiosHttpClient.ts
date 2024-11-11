import { AxiosError, AxiosInstance } from "axios";
import { HttpClient, HttpErrorResponse, HttpRequest, HttpResponse } from "../httpClient";

export class AxiosHttpClient implements HttpClient {
  constructor(private client: AxiosInstance) {}
  
  async request<T>({ url, method, content }: HttpRequest): Promise<HttpResponse<T>> {
    try {
      const { status, data, headers }  = await this.client.request({
        url: url,
        method: method,
        data: (method === 'GET') ? content : null
      })

      return {
        status,
        data
      }
    }
    catch (error) {
      const __error = error as AxiosError<HttpErrorResponse>
      console.error(__error.response?.data.message) 

      return {
        status: 500
      }
    }
  }
}

