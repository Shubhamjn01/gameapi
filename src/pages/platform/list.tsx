import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export const PlatformList = () => {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const { data: platformData, isLoading: categoryIsLoading } = useMany({
    resource: "platform",
    ids:
      dataGridProps?.rows
        ?.map((item: any, index: any) => item?.platformId)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "platformId",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "platformName",
        flex: 1,
        headerName: "Platform Name",
        minWidth: 200,
      },

      {
        field: "createdAt",
        flex: 1,
        headerName: "Created at",
        minWidth: 250,
        renderCell: function render({ value }) {
          return <DateField value={value} />;
        },
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.platformId} />
              <ShowButton hideText recordItemId={row.platformId} />
              <DeleteButton hideText recordItemId={row.platformId} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    [platformData]
  );
  return (
    <List>
      <DataGrid
        {...dataGridProps}
        columns={columns}
        autoHeight
        getRowId={(row) => row.platformId}
      />
    </List>
  );
};
