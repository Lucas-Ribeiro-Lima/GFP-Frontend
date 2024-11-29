import { describe, it, expect } from 'vitest'
import { Preferencias } from "@/components/preferencias";
import { render, screen } from '@testing-library/react';
import { AuthContextMock } from '@/__mocks__/authContext';

describe('Preferencias', () => {
  it("deve renderizer o formulário de preferências", () => {
    render(
      <AuthContextMock user={
        { nome: "John Doe", email: "johndoe@doe" }}>
        <Preferencias.Form />
      </AuthContextMock>
    )

    expect(screen.getByText("Nome de exibição")).toBeInTheDocument()
    const nameInput = screen.getByPlaceholderText("Nome de exibição")
    expect(nameInput).toHaveValue("John Doe")

    expect(screen.getByText("CPF")).toBeInTheDocument()
    const cpfInput = screen.getByPlaceholderText("CPF")
    expect(cpfInput).toHaveValue("12345678900")

    expect(screen.getByText("E-mail")).toBeInTheDocument()
    const emailInput = screen.getByPlaceholderText("E-mail")
    expect(emailInput).toHaveValue("johndoe@doe")
  })
})
