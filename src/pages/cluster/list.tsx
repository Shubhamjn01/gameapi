import { Chip } from "@mui/material";
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

export const ClusterList = () => {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "cluster",
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
        field: "clusterId",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "name",
        flex: 1,
        headerName: "Name",
        minWidth: 200,
      },
      {
        field: "type",
        flex: 1,
        headerName: "Type",
        minWidth: 200,
      },
      {
        field: "clusterVersion",
        flex: 1,
        headerName: "Version",
        minWidth: 200,
      },
      {
        field: "isAccepted",
        flex: 1,
        headerName: "Accepted",
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
      {
        field: "filterTags",
        flex: 1,
        headerName: "Filter Tags",
        minWidth: 300,
        valueGetter: ({ row }) => {
          const value = row?.filterTags;
          return value;
        },
        renderCell: function render({ value }) {
          return value.map((value: any) => <Chip label={value.tagString} />);
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
              <EditButton hideText recordItemId={row.clusterId} />
              <ShowButton hideText recordItemId={row.clusterId} />
              <DeleteButton hideText recordItemId={row.clusterId} />
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
        getRowId={(row) => row.clusterId}
      />
    </List>
  );
};
