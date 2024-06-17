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
        ?.map((item: any, index: any) => item?.mapId)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "mapId",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "mapName",
        flex: 1,
        headerName: "Map Name",
        minWidth: 200,
      },
      {
        field: "currentMapStatus",
        flex: 1,
        headerName: "Current Map Status",
        minWidth: 200,
      },
      {
        field: "mapToken",
        flex: 1,
        headerName: "Map Token",
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
        field: "mapDescription",
        flex: 1,
        headerName: "Map Description",
        minWidth: 200,
      },
      {
        field: "mapPath",
        flex: 1,
        headerName: "Map Path",
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
              <EditButton hideText recordItemId={row.mapId} />
              <ShowButton hideText recordItemId={row.mapId} />
              <DeleteButton hideText recordItemId={row.mapId} />
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
        getRowId={(row) => row.mapId}
      />
    </List>
  );
};
