import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const TagEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    control,
    formState: { errors },
  } = useForm({});

  const blogPostsData = queryResult?.data?.data;

  const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
    resource: "tag",
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
          {...register("tagString", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.tagString}
          helperText={(errors as any)?.tagString?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Tag String"}
          name="tagString"
        />
      </Box>
    </Edit>
  );
};
