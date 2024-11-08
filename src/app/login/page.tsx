import { Button } from "@/components/ui/button";
import Image from "next/image";

const GoogleIcon = () => {
  return (
    <Image
      src="google-logo.svg"
      alt="Simbólo do google, letra G divida em diversas cores"
      width={24}
      height={24}
    ></Image>
  );
};

const AsideContent = () => {
  return (
    <aside className="flex flex-col space-y-8 items-center justify-center w-1/3 h-full border-r-black border-r-2">
      <h2 className="text-center text-3xl font-bold">
        Gestor de Finanças Pessoais
      </h2>
      <Button variant="secondary">
        <GoogleIcon />
        Continuar com o Google
      </Button>
    </aside>
  );
};

const MainContent = () => {
  return (
    <div className="flex justify-center items-center flex-1 h-full bg-default-wallpaper bg-center">
  </div>
  )
}

const FooterContent = () => {
  return (
    <div className="flex items-center justify-end h-10 text-white text-sm bg-black pr-4 font-thin italic">
      Powered by Lucas Ribeiro
    </div>
  );
}

export default function Login() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1">
        <AsideContent />
        <MainContent />
      </div>
      <FooterContent />
    </div>
  );
}
