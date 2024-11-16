import { HttpClient } from "@/adapters/httpClient";
import { ContaProps } from "@/domain/types";

export interface UserContract {
  load: () => Promise<ContaProps | null>
  logout: () => Promise<void>
}

export class UserService implements UserContract {
  constructor(private readonly client: HttpClient) {}
  
  async load() {
    const { status, data } = await this.client.request<ContaProps>({
      url: `${process.env.NEXT_PUBLIC_API_URL}/conta/buscar`,
      method: "GET",
    })

    if(status !== 200) {
      return null
    } else {
      return data ?? null
    }
  }
  
  async logout() {
    await this.client.request<void>({
      url: `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
      method: "POST",
    })
  }
}
