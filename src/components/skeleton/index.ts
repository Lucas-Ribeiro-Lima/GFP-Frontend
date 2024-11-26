import { Skeleton as BaseSkeleton } from '@/components/ui/skeleton';
import { DashboardSkeleton } from "../dashboard/dashboardComponents";
import { HeaderSkeleton } from "../header/header";
import { NavSkeleton } from "../navbar/navComponents";
import { RegistrosSkeleton } from '../registros/registrosComponents';
import { DashboardPageSkeleton } from './dashboard';
import { LayoutSkeleton } from "./layout";
import { RegistrosPageSkeleton } from './registro';
import { PreferenciasAvatarSkeleton } from './Preferencias';

export const SkeletonComponents = {
  Base: BaseSkeleton,
  Navbar: NavSkeleton,
  Header: HeaderSkeleton,
  Dashboard: DashboardSkeleton,
  Registros: RegistrosSkeleton,
  PreferenciasAvatar: PreferenciasAvatarSkeleton
}

export const SkeletonPages = {
  Layout: LayoutSkeleton,
  Dashboard: DashboardPageSkeleton,
  Registros: RegistrosPageSkeleton
}