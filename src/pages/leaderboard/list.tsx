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

export const LeaderboardList = () => {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "leaderboard",
    ids:
      dataGridProps?.rows
        ?.map((item: any, index: any) => item?.boardId)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "boardId",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "screenName",
        flex: 1,
        headerName: "Screen Name",
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
        field: "timerecord",
        flex: 1,
        headerName: "Time Record",
        minWidth: 200,
      },
      {
        field: "matchplacing",
        flex: 1,
        headerName: "Match Placing",
        minWidth: 200,
      },
      {
        field: "userId",
        flex: 1,
        headerName: "User",
        minWidth: 200,
      },
      {
        field: "clusterId",
        flex: 1,
        headerName: "Cluster",
        minWidth: 200,
      },
      {
        field: "mapId",
        flex: 1,
        headerName: "Map",
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
              <EditButton hideText recordItemId={row.boardId} />
              <ShowButton hideText recordItemId={row.boardId} />
              <DeleteButton hideText recordItemId={row.boardId} />
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
        getRowId={(row) => row.boardId}
      />
    </List>
  );
};
