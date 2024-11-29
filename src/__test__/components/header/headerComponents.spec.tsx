import { describe, expect, it } from "vitest";
import { Header } from "@/components/header";
import { render, screen } from "@testing-library/react";


describe("Header", () => {
  it("deve renderizar o Header Wrapper", () => {
    render(<Header.Wrapper />)

    expect(screen.getByRole("banner")).toBeVisible()
  })

  it("deve renderizar o Header Avatar fallback", () => {
    render(<Header.Avatar avatarSrc="invalid" avatarFallback="CN" />)

    expect(screen.getByText("CN")).toBeInTheDocument()
  })

  it("deve renderizar o Header Title", () => {
    render(<Header.Title>Nome</Header.Title>)

    expect(screen.getByText("Bem vindo,")).toBeInTheDocument()
    expect(screen.getByText("Nome")).toBeInTheDocument()
  })
})