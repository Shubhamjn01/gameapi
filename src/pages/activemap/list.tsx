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

export const ActiveMapList = () => {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "activemap",
    ids:
      dataGridProps?.rows
        ?.map((item: any, index: any) => item?.activemapId)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "activemapId",
        flex: 1,
        headerName: "Active Map",
        minWidth: 200,
      },
      {
        field: "mapId",
        flex: 1,
        headerName: "Map",
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
        field: "mapURLPath",
        flex: 1,
        headerName: "Map URL",
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
      {
        field: "populationLimit",
        flex: 1,
        headerName: "Population Limit",
        minWidth: 200,
      },
      {
        field: "currentPopulation",
        flex: 1,
        headerName: "Current Population",
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
              <EditButton hideText recordItemId={row.activemapId} />
              <ShowButton hideText recordItemId={row.activemapId} />
              <DeleteButton hideText recordItemId={row.activemapId} />
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
        getRowId={(row) => row.activemapId}
      />
    </List>
  );
};
