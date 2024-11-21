import { Skeleton } from "../ui/skeleton";

export function PreferenciasAvatarSkeleton() {
  return( 
    <Skeleton className="flex flex-col justify-center items-center">
      <Skeleton className="h-56 w-56"></Skeleton>
      <Skeleton className="h-4 w-24"></Skeleton>
    </Skeleton>
  )
}