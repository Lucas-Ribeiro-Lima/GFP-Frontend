import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { object } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mothNow() {
  return new Date().getMonth().toString()
}

export function formatCurrency(value: string | number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(value));
}

export function getMonthIndex(): string[] {
  const months = [
      "Janeiro", 
      "Fevereiro",
      "Marco", 
      "Abril", 
      "Maio", 
      "Junho", 
      "Julho", 
      "Agosto", 
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ]

  return months
}