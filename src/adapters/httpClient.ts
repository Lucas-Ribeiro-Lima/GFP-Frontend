export interface HttpClient {
  request: <T>(data: HttpRequest) => Promise<HttpResponse<T>>
}

export type HttpRequest = {
  url: string,
  method: "GET" | "POST" | "PATCH" | "DELETE"
  content?: unknown
}

export type HttpResponse<T> = {
  status: number
  data?: T 
}

export type HttpErrorResponse = {
  type: string,
  message: string
}
