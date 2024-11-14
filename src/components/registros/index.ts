import { DataTable } from '@/components/registros/data-table'
import { RegistrosAction, RegistrosActionsWrapper, RegistrosContentData, RegistrosContentWrapper, RegistrosHeader, RegistrosWrapper, } from '@/components/registros/registrosComponents'
import { DialogContent, LinkCell } from '@/components/registros/tableComponents'


export const Registro = {
  Wrapper: RegistrosWrapper,
  Header: RegistrosHeader,
  ActionsWrapper: RegistrosActionsWrapper,
  Action: RegistrosAction,
  ContentWrapper: RegistrosContentWrapper,
  ContentData: RegistrosContentData,
  DataTable: DataTable,
  TableComponents: {
    Link: LinkCell,
    Dialog: DialogContent
  }
}