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
    <div className="flex flex-1 mt-2 rounded-sm">
      {children}
    </div>
  )
}

export function RegistrosContentData({ children }: RegistrosProps) {
 return (
  <div className="flex flex-1">
    {children}
  </div>
 )
}

export function RegistrosSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
        <div className="flex gap-4">
          <div className="w-20 h-8 bg-gray-200 rounded"></div>
          <div className="w-20 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
      </div>
      <div className="flex gap-4">
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}