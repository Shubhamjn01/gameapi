import { Box, Stack, Typography } from "@mui/material";
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

  // const fullName = `${record?.userId.firstName || ''} ${record?.userId.lastName || ''}`;
  // console.log(record?.filterTags.tagId)
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
          {"Name"}
        </Typography>
        <TextField value={record?.name} />

        <Typography variant="body1" fontWeight="bold">
          {"Cluster Report"}
        </Typography>
        <TextField value={record?.clusterReport} />

        <Typography variant="body1" fontWeight="bold">
          {"User"}
        </Typography>
        <TextField value={record?.userId} />

        {/* <Typography variant="body1" fontWeight="bold">
          {"User Name"}
        </Typography>
        <TextField value={fullName} /> */}

        <Typography variant="body1" fontWeight="bold">
          {"Spawnable Maps"}
        </Typography>
        <TextField value={record?.SpawnableMaps} />
        
        <Typography variant="body1" fontWeight="bold">
          {"Accepted"}
        </Typography>
        <TextField value={record?.isAccepted.toString()} />
        
        <Typography variant="body1" fontWeight="bold">
          {"Tag String"}
        </Typography>
        {/* <TextField value={record?.filterTags.tagString} /> */}
        <Box>
        {record?.filterTags?.map((tag : any) => (
          <TextField
            // key={index}
            value={tag.tagString}
            margin="normal"
            // fullWidth
          />
        ))}
      </Box>

        <Typography variant="body1" fontWeight="bold">
          {"Cluster Version"}
        </Typography>
        <TextField value={record?.clusterVersion} />
        
        <Typography variant="body1" fontWeight="bold">
          {"Cluster Token"}
        </Typography>
        <TextField value={record?.clusterToken} />
        
        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
};
