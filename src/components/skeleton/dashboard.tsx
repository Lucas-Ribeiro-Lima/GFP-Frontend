import { SkeletonComponents } from '@/components/skeleton/index'


export function DashboardPageSkeleton() {
  return (
    <>
      <SkeletonComponents.Dashboard></SkeletonComponents.Dashboard>
      <SkeletonComponents.Base className="flex-1 m-8 p-4 rounded-sm bg-slate-300/60"/>
    </>
  )
}