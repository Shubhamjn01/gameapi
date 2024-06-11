import { Stack, Typography } from "@mui/material";
import { useOne, useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const PassportShow = () => {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?.passportId} />

        <Typography variant="body1" fontWeight="bold">
          {"Platform"}
        </Typography>
        <TextField value={record?.platform?.platformName} />

        <Typography variant="body1" fontWeight="bold">
          {"User"}
        </Typography>
        <TextField
          value={record?.user.firstName + " " + record?.user.lastName}
        />

        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
};
