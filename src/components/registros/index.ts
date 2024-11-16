import { DataTable } from '@/components/registros/dataTable'
import { RegistrosActionContent, RegistrosActionsWrapper, RegistrosContentData, RegistrosContentWrapper, RegistrosHeader, RegistrosWrapper, } from '@/components/registros/registrosComponents'
import { RendaForm } from '@/components/registros/renda/form'
import { DespesaActionRows, DialogContent, DialogDeleteContent, LinkCell, RendaActionRows } from '@/components/registros/tableComponents'
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
    DialogDelete: DialogDeleteContent,
    ActionsRows: {
      Renda: RendaActionRows,
      Despesa: DespesaActionRows
    }
  },
  RendaForm: RendaForm,
  DespesaForm: DespesaForm,
}