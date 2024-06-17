import { Stack, Typography } from "@mui/material";
import { useOne, useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const ClusterShow = () => {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "cluster",
    id: record?.clusterId || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?.clusterId} />

        <Typography variant="body1" fontWeight="bold">
          {"Data"}
        </Typography>
        <TextField value={record?.data} />

        <Typography variant="body1" fontWeight="bold">
          {"Total"}
        </Typography>
        <TextField value={record?.total} />

        <Typography variant="body1" fontWeight="bold">
          {"Count"}
        </Typography>
        <TextField value={record?.count} />
        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
};
