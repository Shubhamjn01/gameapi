import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export const MapList = () => {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "map",
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
        field: "userId",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "firstName",
        flex: 1,
        headerName: "First Name",
        minWidth: 200,
      },
      // {
      //   field: "content",
      //   flex: 1,
      //   headerName: "content",
      //   minWidth: 250,
      //   renderCell: function render({ value }) {
      //     if (!value) return "-";
      //     return <MarkdownField value={value?.slice(0, 80) + "..." || ""} />;
      //   },
      // },
      // {
      //   field: "lastName",
      //   flex: 1,
      //   headerName: "Last Name",
      //   minWidth: 300,
      //   valueGetter: ({ row }) => {
      //     const value = row?.category;
      //     return value;
      //   },
      //   renderCell: function render({ value }) {
      //     return categoryIsLoading ? (
      //       <>Loading...</>
      //     ) : (
      //       categoryData?.data?.find((item) => item.id === value?.id)?.title
      //     );
      //   },
      // },
      {
        field: "lastName",
        flex: 1,
        headerName: "Last Name",
        minWidth: 200,
      },
      {
        field: "email",
        flex: 1,
        headerName: "Email",
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
              <EditButton hideText recordItemId={row.userId} />
              <ShowButton hideText recordItemId={row.userId} />
              <DeleteButton hideText recordItemId={row.userId} />
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
        getRowId={(row) => row.userId}
      />
    </List>
  );
};
