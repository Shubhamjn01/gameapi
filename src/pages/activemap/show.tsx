import { Stack, Typography } from "@mui/material";
import { useOne, useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const ActiveMapShow = () => {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "activemap",
    id: record?.activemapId || "",
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
        <TextField value={record?.activemapId} />
        
        <Typography variant="body1" fontWeight="bold">
          {"Map"}
        </Typography>
        <TextField value={record?.mapId} />

        <Typography variant="body1" fontWeight="bold">
          {"Map URL"}
        </Typography>
        <TextField value={record?.mapURLPath} />

        <Typography variant="body1" fontWeight="bold">
          {"Current Map Status"}
        </Typography>
        <TextField value={record?.currentMapStatus} />

        <Typography variant="body1" fontWeight="bold">
          {"Map Token"}
        </Typography>
        <TextField value={record?.mapToken} />

        <Typography variant="body1" fontWeight="bold">
          {"Population Limit"}
        </Typography>
        <TextField value={record?.populationLimit} />

        <Typography variant="body1" fontWeight="bold">
          {"Current Population"}
        </Typography>
        <TextField value={record?.currentPopulation} />

        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
};
