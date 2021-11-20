import Add from '@material-ui/icons/Add';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable, { MaterialTableProps } from 'material-table';
import { forwardRef } from 'react';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import React from 'react';

//need to figure out someway to assign a specific type to this Data. doing it like this : TypeA | TypeB | TypeC doesnt work.
type Data = any[];

interface AgentsTableProps extends MaterialTableProps<Data> {
  loading?: boolean;
  onTableRowClick?: ((param: string[] | null) => void) | ((param: number[] | null) => void);
  idProperty?: string;
  title?: string;
  singleSelect?: boolean;
  modalRowClicked?: boolean;
  onSingleRowClick?: (param: number) => void;
  onCheckboxClick?: (param: boolean) => void;
  detailPanelFlag?: boolean;
  detailPanelTextKey?: string;
  noHeader?: boolean;
  disableGlobalSearch?: boolean;
  disableExport?: boolean;
  disablePageSizeOptions?: boolean;
  pageSize?: number;
  disablePaging?: boolean;
}

function DataTable(props: AgentsTableProps): JSX.Element {
  //console.log(data);
  const {
    onTableRowClick,
    data,
    loading,
    columns,
    idProperty,
    options,
    title,
    singleSelect,
    modalRowClicked,
    detailPanelFlag,
    detailPanelTextKey,
    disableGlobalSearch,
    disableExport,
    disablePageSizeOptions,
    pageSize,
    disablePaging,
    onSingleRowClick,
    onCheckboxClick,
  } = props;
  return (
    <MaterialTable
      /*adding icons as explained here : https://github.com/mbrn/material-table/issues/93 */
      {...props}
      title={title}
      icons={{
        Add: forwardRef((props, ref) => <Add {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => {
          if (detailPanelFlag) {
            return <ChevronRight {...props} ref={ref} />;
          }
          return <></>;
        }),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
      }}
      localization={{
        header: {
          actions: 'Actions',
        },
      }}
      isLoading={loading}
      options={{
        selection: !singleSelect,
        //detailPanelType: "single",
        paging: !disablePaging,
        pageSize: pageSize ? pageSize : 10,
        pageSizeOptions: disablePageSizeOptions ? [pageSize ? pageSize : 5] : [5, 10, 20, 50, 100],
        toolbar: true,
        search: !disableGlobalSearch,
        exportButton: !disableExport,
        exportAllData: true,
        //actionsColumnIndex: -1,
        //actionsCellStyle: { color: "#8D9098" },
        selectionProps: (rowData: any) => ({
          color: 'primary',
        }),

        headerStyle: {
          font: 'Proxima Nova',
          fontSize: '14px',
          lineHeight: '20px',
        },
        rowStyle: (x) => {
          const styles = {
            font: 'Proxima Nova',
            fontSize: '14px',
            lineHeight: '65px',
            color: '#020A20',
            background: '',
          };

          return styles;
        },
        ...options,
      }}
      columns={columns}
      data={data}
      onSelectionChange={(rows) => {
        if (rows.length > 0) {
          const id = idProperty ? idProperty : 'number';
          const selectedIds = rows.map((k: any) => k[id]);
          onTableRowClick && onTableRowClick(selectedIds);
          onCheckboxClick && onCheckboxClick(false);
        } else {
          onTableRowClick && onTableRowClick(null);
          onCheckboxClick && onCheckboxClick(false);
        }
      }}
      onRowClick={(event, rowData?: any, togglePanel?) => {
        if (singleSelect) {
          const id = idProperty ? idProperty : 'number';
          onSingleRowClick && onSingleRowClick(rowData[id]);
        } else if (modalRowClicked) {
          onSingleRowClick && onSingleRowClick(rowData);
        } else {
          togglePanel && togglePanel();
        }
      }}
      detailPanel={(rowData: any) => {
        if (detailPanelFlag && detailPanelTextKey) {
          return (
            <div className="notes-details">
              <h3>Notes: </h3>
              <p>{rowData[detailPanelTextKey]}</p>
            </div>
          );
        }
      }}
    ></MaterialTable>
  );
}

export default DataTable;
