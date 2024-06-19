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

export const UserPersistanceDataList = () => {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "userpersistancedata",
    ids:
      dataGridProps?.rows
        ?.map((item: any, index: any) => item?.UserPersistanceDataId)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "UserPersistanceDataId",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "userId",
        headerName: "User",
        type: "number",
        minWidth: 50,
      },
      {
        field: "clusterId",
        flex: 1,
        headerName: "Cluster",
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
        field: "mapId",
        flex: 1,
        headerName: "Map",
        minWidth: 200,
      },
      {
        field: "defaultMapId",
        flex: 1,
        headerName: "Default Map",
        minWidth: 200,
      },
      {
        field: "lastmapAcessedId",
        flex: 1,
        headerName: "Last Map Accessed",
        minWidth: 200,
      },
      {
        field: "screenName",
        flex: 1,
        headerName: "Screen Name",
        minWidth: 200,
      },
      {
        field: "screenStatus",
        flex: 1,
        headerName: "Screen Status",
        minWidth: 200,
      },
      {
        field: "gameData",
        flex: 1,
        headerName: "Game Data",
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
              <EditButton hideText recordItemId={row.UserPersistanceDataId} />
              <ShowButton hideText recordItemId={row.UserPersistanceDataId} />
              <DeleteButton hideText recordItemId={row.UserPersistanceDataId} />
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
        getRowId={(row) => row.UserPersistanceDataId}
      />
    </List>
  );
};
