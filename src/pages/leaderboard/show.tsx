import { Stack, Typography } from "@mui/material";
import { useOne, useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const LeaderboardShow = () => {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "leaderboard",
    id: record?.boardId || "",
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
        <TextField value={record?.boardId} />

        <Typography variant="body1" fontWeight="bold">
          {"Screen Name"}
        </Typography>
        <TextField value={record?.screenName} />

        <Typography variant="body1" fontWeight="bold">
          {"Time Record"}
        </Typography>
        <TextField value={record?.timerecord} />

        <Typography variant="body1" fontWeight="bold">
          {"Match Placing"}
        </Typography>
        <TextField value={record?.matchplacing} />

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
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
};
