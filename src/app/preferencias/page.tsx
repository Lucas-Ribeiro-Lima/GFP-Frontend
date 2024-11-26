
import { Preferencias } from "@/components/preferencias";
import { Suspense } from "react";

export default function PreferenciasPage() {


  return (
    <Preferencias.Wrapper>
      <Preferencias.Form/>
      <Suspense>
        <Preferencias.Avatar/>
      </Suspense>
    </Preferencias.Wrapper>
  )
}