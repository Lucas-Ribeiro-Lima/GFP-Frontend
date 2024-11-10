'use client'

import { authHandler } from "@/services/authHandler";
import { Button } from "../ui/button";
import { GoogleIcon } from "./googleIcon";
import { Logo } from "../logo/logo";

export const AsideContent = () => {
  return (
    <aside className="flex flex-col space-y-8 items-center justify-center md:w-1/3 h-full border-r-black border-r-2">
      <div className="md:hidden">
        <Logo></Logo>
      </div>
      <h2 className="text-center text-3xl font-bold">
        Gestor de Finanças Pessoais
      </h2>
      <Button variant="secondary" onClick={authHandler}>
        <GoogleIcon />
        Continuar com o Google
      </Button>
    </aside>
  );
};