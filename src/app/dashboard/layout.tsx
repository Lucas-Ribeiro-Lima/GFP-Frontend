import { SkeletonPages } from "@/components/skeleton"
import { AuthProvider } from "@/contexts/authContext"
import { CarteiraProvider } from "@/contexts/carteiraContext"
import { carteiraService, userService } from "@/services/index"
import { Suspense } from "react"


export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <Suspense fallback={<SkeletonPages.layout/>}>
      <AuthProvider userService={userService}>
        <CarteiraProvider carteiraService={carteiraService}>
          <div className="flex flex-col h-full p-4 bg-gradient-to-br from-white via-sky-100 to-white">
            {children}
          </div>
        </CarteiraProvider>
      </AuthProvider>
    </Suspense>
  )
}
