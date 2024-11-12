'use client'

import { useRouter } from "next/navigation"

export default function Home() {
  const { push } = useRouter()

  push("/dashboard")
  return <div className="flex flex-col h-full p-4 bg-gradient-to-br from-white via-sky-100 to-white"></div>
}
