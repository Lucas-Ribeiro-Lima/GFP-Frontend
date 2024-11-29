import { Logo } from "@/components/logo/logo";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Logo", () => {
  it("deve renderizar o Logo", () => {
    render(<Logo />)
    
    expect(screen.getByRole("img")).toBeVisible()
    expect(screen.getByAltText("GFP Logo, um passáro azul com a sigla GFP")).toBeVisible()
  })
})