import { Wallet } from "@/components/carteira";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Carteira", () => {
  it("deve renderizar corretamente o carteira wrapper", () => {
    render(<Wallet.Wrapper />)
    
    expect(screen.getByText("minha")).toBeInTheDocument()
    expect(screen.getByText("carteira")).toBeInTheDocument()
  })

  it("deve renderizar corretamente carteira data title", () => {
    render(<Wallet.DataTitle variant="Renda" dataTitle="Renda"/>)
    render(<Wallet.DataTitle variant="Despesa" dataTitle="Despesa"/>)
    
    expect(screen.getByText("Renda")).toBeInTheDocument()
    expect(screen.getByText("Despesa")).toBeInTheDocument()
  })

  it("deve renderizar corretamente carteira data content", () => {
    render(<Wallet.DataContent />)
    
    expect(screen.getByText("Nome")).toBeInTheDocument()
    expect(screen.getByText("Data")).toBeInTheDocument()
    expect(screen.getByText("Valor")).toBeInTheDocument()
    expect(screen.getByText("Categoria")).toBeInTheDocument()
  })
})
