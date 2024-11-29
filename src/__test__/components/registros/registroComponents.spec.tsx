import { Registro } from "@/components/registros";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Registro Components", () => {
  it("deve renderizar o registro header", () => {
    render(<Registro.Header title="Rendas"><></></Registro.Header>)
    render(<Registro.Header title="Despesas"><></></Registro.Header>)

    expect(screen.getByText("Rendas")).toBeInTheDocument()
    expect(screen.getByText("Despesas")).toBeInTheDocument()
  })
})