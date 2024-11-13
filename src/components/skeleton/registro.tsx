import { SkeletonComponents } from ".";

export function RegistrosPageSkeleton() {
  return(
    <>
      <SkeletonComponents.Dashboard></SkeletonComponents.Dashboard>
      <SkeletonComponents.Base className="flex-1 m-8 p-4 rounded-sm bg-slate-300/60">
        <SkeletonComponents.Registros></SkeletonComponents.Registros>
      </SkeletonComponents.Base>
    </>
  )
}