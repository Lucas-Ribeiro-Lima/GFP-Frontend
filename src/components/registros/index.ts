import { DataTable } from '@/components/registros/data-table'
import { RegistrosActionContent, RegistrosActionsWrapper, RegistrosContentData, RegistrosContentWrapper, RegistrosHeader, RegistrosWrapper, } from '@/components/registros/registrosComponents'
import { RendaForm } from '@/components/registros/renda/form'
import { DialogContent, DialogDeleteContent, LinkCell } from '@/components/registros/tableComponents'
import { DespesaForm } from './despesa/form'


export const Registro = {
  Wrapper: RegistrosWrapper,
  Header: RegistrosHeader,
  ActionsWrapper: RegistrosActionsWrapper,
  ActionContent: RegistrosActionContent,
  ContentWrapper: RegistrosContentWrapper,
  ContentData: RegistrosContentData,
  DataTable: DataTable,
  TableComponents: {
    Link: LinkCell,
    DialogContent: DialogContent,
    DialogDelete: DialogDeleteContent
  },
  RendaForm: RendaForm,
  DespesaForm: DespesaForm,
}