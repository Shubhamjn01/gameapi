import { Stack, Typography } from "@mui/material";
import { useOne, useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const UserPersistanceDataShow = () => {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "userpersistancedata",
    id: record?.UserPersistanceDataId || "",
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
        <TextField value={record?.UserPersistanceDataId} />

        <Typography variant="body1" fontWeight="bold">
          {"User"}
        </Typography>
        <TextField value={record?.userId} />

        <Typography variant="body1" fontWeight="bold">
          {"Cluster"}
        </Typography>
        <TextField value={record?.clusterId} />

        <Typography variant="body1" fontWeight="bold">
          {"Map"}
        </Typography>
        <TextField value={record?.mapId} />

        <Typography variant="body1" fontWeight="bold">
          {"Default Map"}
        </Typography>
        <TextField value={record?.defaultMapId} />

        <Typography variant="body1" fontWeight="bold">
          {"Last Map Accessed"}
        </Typography>
        <TextField value={record?.lastmapAcessedId} />

        <Typography variant="body1" fontWeight="bold">
          {"Screen Name"}
        </Typography>
        <TextField value={record?.screenName} />

        <Typography variant="body1" fontWeight="bold">
          {"Screen Status"}
        </Typography>
        <TextField value={record?.screenStatus} />

        <Typography variant="body1" fontWeight="bold">
          {"Game Data"}
        </Typography>
        <TextField value={record?.gameData} />

        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
};
