import { Dashboard } from "@/components/dashboard";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Dashboard", () => {
  it("deve renderizar corretamente o dashboard title", () => {
    render(<Dashboard.Title month="Janeiro"/>)

    expect(screen.getByText("Resumo de")).toBeInTheDocument()
    expect(screen.getByText("Janeiro")).toBeInTheDocument()
    expect(screen.getByText("expandir")).toBeInTheDocument()
  })

  it("deve renderizar corretamente dashboard total item", () => {
    render(<Dashboard.TotalItem 
      icon={<Dashboard.Icon variant="Total"/>} 
      dataTitle="Total" dataValue="1000"/>)


    expect(screen.getByText("Total")).toBeInTheDocument()
    expect(screen.getByText("R$ 1.000,00")).toBeInTheDocument()
    expect(screen.getByLabelText("img")).toBeInTheDocument()
  })

  it("deve renderizar corretamente dashboard total receita item", () => {
    render(<Dashboard.TotalItem 
      icon={<Dashboard.Icon variant="Renda"/>}
      dataTitle="Receita" dataValue="1000"/>)

    expect(screen.getByText("Receita")).toBeInTheDocument()
    expect(screen.getByText("R$ 1.000,00")).toBeInTheDocument()
    expect(screen.getByLabelText("img")).toBeInTheDocument()
  })

  it("deve renderizar corretamente dashboard total despesa item", () => {
    render(<Dashboard.TotalItem 
      icon={<Dashboard.Icon variant="Despesa"/>}
      dataTitle="Despesa" dataValue="1000"/>)

    expect(screen.getByText("Despesa")).toBeInTheDocument()
    expect(screen.getByText("R$ 1.000,00")).toBeInTheDocument()
    expect(screen.getByLabelText("img")).toBeInTheDocument()
  })
})


describe("Dashboard Total Icon", () => {
  it("deve renderizar o ícone de renda corretamente", () => {
    render(<Dashboard.Icon variant="Renda"/>)
    expect(screen.getByLabelText("img")).toHaveClass("text-green-400")
  })

  it("deve renderizar o ícone de despesa corretamente", () => {
    render(<Dashboard.Icon variant="Despesa"/>)
    expect(screen.getByLabelText("img")).toHaveClass("text-red-400")
  })

  it("deve renderizar o ícone de total corretamente", () => {
    render(<Dashboard.Icon variant="Total"/>)
    expect(screen.getByLabelText("img")).toHaveClass("text-sky-400")
  })
})