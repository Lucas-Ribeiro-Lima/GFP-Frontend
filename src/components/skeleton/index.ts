import { Skeleton as BaseSkeleton } from '@/components/ui/skeleton';
import { DashboardSkeleton } from "../dashboard/dashboardComponents";
import { HeaderSkeleton } from "../header/header";
import { NavSkeleton } from "../navbar/navComponents";
import { RegistrosSkeleton } from '../registros/registrosComponents';
import { LayoutSkeleton } from "./layout";
import { RegistrosPageSkeleton } from './registro';
import { DashboardPageSkeleton } from './dashboard';

export const SkeletonComponents = {
  Base: BaseSkeleton,
  Navbar: NavSkeleton,
  Header: HeaderSkeleton,
  Dashboard: DashboardSkeleton,
  Registros: RegistrosSkeleton
}

export const SkeletonPages = {
  layout: LayoutSkeleton,
  dashboard: DashboardPageSkeleton,
  registros: RegistrosPageSkeleton
}