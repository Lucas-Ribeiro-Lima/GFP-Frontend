import { NavbarFull } from "@/components/navbar/navbarFull";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("NavbarFull", () => {
  it("deve renderizar o NavbarFull", () => {
    render(<NavbarFull />)

    const navItems = screen.getByRole("list")
    const qtdItems = screen.getAllByRole("listitem")

    expect(qtdItems).toHaveLength(5)

    expect(within(navItems).getByText("Dashboard")).toBeInTheDocument()
    expect(within(navItems).getByText("Rendas")).toBeInTheDocument()
    expect(within(navItems).getByText("Despesas")).toBeInTheDocument()
    expect(within(navItems).getByText("Preferências")).toBeInTheDocument()
    expect(within(navItems).getByText("Sair")).toBeInTheDocument()
  })
})