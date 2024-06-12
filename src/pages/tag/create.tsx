import { Autocomplete, Box, MenuItem, Select, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const TagCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
  } = useForm({});

  // const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
  //   resource: "user",
  // });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};
