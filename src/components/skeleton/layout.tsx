import { SkeletonComponents } from ".";

export function LayoutSkeleton() {
  return (
    <div className="flex flex-col h-full p-4 bg-gradient-to-br from-white via-sky-100 to-white">
      <SkeletonComponents.Navbar/>
      <div className="flex flex-col flex-1">
        <SkeletonComponents.Header/>
        <main className="flex flex-col flex-1">
          <SkeletonComponents.Dashboard/>
          <SkeletonComponents.Base className="flex-1 m-8 p-4 rounded-sm bg-slate-300/60"/>
        </main>
      </div>
    </div>
  )
}