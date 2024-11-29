import { AuthContextMock } from "@/__mocks__/authContext";
import { HeaderFull } from "@/components/header/headerFull";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("HeaderFull", () => {
  it("deve renderizar o HeaderFull", () => {

    render(
      <AuthContextMock user={{ nome: "John Doe"}} userInitials="JD">
        <HeaderFull /> 
      </AuthContextMock>
    )

    expect(screen.getByText("John Doe")).toBeInTheDocument()
    expect(screen.getByText("JD")).toBeInTheDocument()
  })
})