'use client'

import { Wallet } from "@/components/carteira"


export default function Page() {
  return (
    <>
      <Wallet.DataTitle variant="Renda" dataTitle="Renda"></Wallet.DataTitle>
      <Wallet.DataContent></Wallet.DataContent>
    </>
  )
}