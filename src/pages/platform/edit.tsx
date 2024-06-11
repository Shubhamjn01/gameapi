import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const PlatformEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    control,
    formState: { errors },
  } = useForm({});

  const blogPostsData = queryResult?.data?.data;

  const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
    resource: "platform",
    defaultValue: blogPostsData?.category?.id,
  });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("platformName", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.platformName}
          helperText={(errors as any)?.platformName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Platform Name"}
          name="platformName"
        />
      </Box>
    </Edit>
  );
};
