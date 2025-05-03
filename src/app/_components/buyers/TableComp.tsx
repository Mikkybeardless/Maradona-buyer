import { Paper } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

// Define the TableComponentProps interface
interface TableComponentProps {
  columns: Array<GridColDef>; // Use the correct type for DataGrid columns
  rows: GridRowsProp; // Replace 'any' with the correct type for your rows
  paginationActive: boolean;
  pageSize: number;
  rowHeight: number;
  showCheckbox?: boolean;
}

export default function MuiTableComponent({
  columns,
  rows,
  paginationActive,
  pageSize,
  rowHeight,
  showCheckbox,
}: TableComponentProps) {
  const paginationModel = { page: 0, pageSize };

  return (
    <div className="w-full overflow-x-auto">
      <Paper className="w-full overflow-x-auto custom-scrollbar">
        <div style={{ height: 400, width: '100%', overflowX: 'auto' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={
              paginationActive ? { pagination: { paginationModel } } : undefined
            }
            pageSizeOptions={[5, 10, 15, 20]}
            checkboxSelection={
              typeof showCheckbox === 'undefined' ? true : showCheckbox
            }
            disableColumnFilter={true}
            disableColumnMenu={true}
            disableRowSelectionOnClick={true}
            rowHeight={rowHeight}
            sx={{ border: 0 }}
          />
        </div>
      </Paper>
    </div>
  );
}
