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

export const PassportList = () => {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "passport",
    ids:
      dataGridProps?.rows
        ?.map((item: any, index: any) => item?.userId)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "passportId",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "user",
        flex: 1,
        headerName: "User",
        minWidth: 200,
        valueGetter: ({ row }) => {
          const value = row.user.firstName + " " + row.user.lastName;
          return value;
        },
      },

      {
        field: "platform",
        flex: 1,
        headerName: "Platform",
        minWidth: 200,
        valueGetter: ({ row }) => {
          const value = row.platform.platformName;
          return value;
        },
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
              <EditButton hideText recordItemId={row.passportId} />
              <ShowButton hideText recordItemId={row.passportId} />
              <DeleteButton hideText recordItemId={row.passportId} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    [categoryData]
  );
  return (
    <List>
      <DataGrid
        {...dataGridProps}
        columns={columns}
        autoHeight
        getRowId={(row) => row.passportId}
      />
    </List>
  );
};
