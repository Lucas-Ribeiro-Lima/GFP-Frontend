'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { push } = useRouter()

  useEffect(() => {
    push("/dashboard")
  }, [push])
  
  return <div className="flex flex-col h-full p-4 bg-gradient-to-br from-white via-sky-100 to-white"></div>
}
