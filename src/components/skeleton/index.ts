import { Skeleton as BaseSkeleton } from '@/components/ui/skeleton';
import { DashboardSkeleton } from "../dashboard/dashboardComponents";
import { HeaderSkeleton } from "../header/header";
import { NavSkeleton } from "../navbar/navComponents";
import { LayoutSkeleton } from "./layout";

export const SkeletonComponents = {
  Base: BaseSkeleton,
  Navbar: NavSkeleton,
  Header: HeaderSkeleton,
  Dashboard: DashboardSkeleton
}

export const SkeletonPages = {
  layout: LayoutSkeleton,
  dashboard: DashboardSkeleton
}