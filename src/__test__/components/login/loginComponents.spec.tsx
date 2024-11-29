import { AppRouterContextProviderMock } from "@/__mocks__/router"
import { Login } from "@/components/login"
import { GoogleIcon } from "@/components/login/googleIcon"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

describe("AsideContent", () => {
  it("deve renderizar corretamente", () => {
    render(<Login.Aside />, { wrapper: AppRouterContextProviderMock })

    expect(screen.getByRole("complementary")).toBeVisible()
    expect(screen.getByText("Gestor de Finanças Pessoais")).toBeInTheDocument()
    expect(screen.getByText("Continuar com o Google")).toBeInTheDocument()
  })
})

describe("FooterContent", () => {
  it("deve renderizar corretamente", () => {
    render(<Login.Footer />)

    expect(screen.getByText("Powered by Lucas Ribeiro")).toBeInTheDocument()
  })
})

describe("MainContext", () => {
  it("deve renderizar corretamente", () => {
    render(<Login.Main />)

    expect(screen.getByRole("main")).toBeVisible()
  })
})

describe("GoogleIcon", () => {
  it("deve renderizar corretamente", () => {
    render(<GoogleIcon />)

    expect(screen.getByRole("img", { name: "Símbolo do google, letra G divida em diversas cores"})).toBeInTheDocument()
  })
})