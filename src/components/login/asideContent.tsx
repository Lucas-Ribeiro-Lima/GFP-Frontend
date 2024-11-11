'use client'

import { useRouter } from "next/navigation";
import { Logo } from "../logo/logo";
import { Button } from "../ui/button";
import { GoogleIcon } from "./googleIcon";

export const AsideContent = () => {
  const { push } = useRouter()

  return (
    <aside className="flex flex-col space-y-8 items-center justify-center md:w-1/3 h-full border-r-black border-r-2">
      <div className="md:hidden">
        <Logo></Logo>
      </div>
      <h2 className="text-center text-3xl font-bold">
        Gestor de Finanças Pessoais
      </h2>
      <Button variant="secondary" onClick={() => push(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`)}>
        <GoogleIcon />
        Continuar com o Google
      </Button>
    </aside>
  );
};