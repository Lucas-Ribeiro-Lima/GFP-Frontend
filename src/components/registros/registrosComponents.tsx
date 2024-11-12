import { Button } from "../ui/button";

type RegistrosProps = {
  children: React.ReactNode;
}

export function RegistrosWrapper({ children }: RegistrosProps) {
  return (
    <div className="flex flex-1 flex-col">
      {children}
    </div>
  )
}

type RegistrosHeaderProps = {
  children: React.ReactNode;
  title: "Rendas" | "Despesas";
}

export function RegistrosHeader({ children,  title }: RegistrosHeaderProps) {
  return (
    <div className="flex justify-between ">
      <strong>{title}</strong>
      <div className="flex gap-4">
        {children}
      </div>
    </div>
  )
}

export function RegistrosActionsWrapper({ children }: RegistrosProps) {
  return (
    <div className="flex gap-4">
      {children}
    </div>
  )
}

type RegistrosActionsProps = {
  children?: React.ReactNode;
  variant?: "secondary" | "destructive" | "default";
  disabled?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function RegistrosAction({children="Adicionar", variant = "secondary",  disabled = false, ...props}: RegistrosActionsProps) {
  return (
    <Button variant={variant} disabled={disabled} {...props}>{children}</Button>
  )
}

export function RegistrosContentWrapper({ children }: RegistrosProps) {
  return (
    <div className="flex-1 mt-2 p-4 rounded-sm">
      {children}
    </div>
  )
}

export function RegistrosContentData({ children }: RegistrosProps) {
 return (
  <div>
    {children}
  </div>
 )
}