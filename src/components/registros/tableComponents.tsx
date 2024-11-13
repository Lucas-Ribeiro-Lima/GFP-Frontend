import Link from "next/link";

export function LinkCell({ uuid }: { uuid: string }) {
  return(
    <Link 
    href={`/registros/renda/${uuid}`} 
    className="
      flex items-center
      w-2/5 aspect-square rounded-full
      bg-sky-700 hover:bg-sky-600 hover:ring-2 hover:ring-white
      shadow-md shadow-white "
    />  
  )
}