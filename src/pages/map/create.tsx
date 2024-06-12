import { Autocomplete, Box, MenuItem, Select, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const MapCreate = () => {
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
          {...register("mapName", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.mapName}
          helperText={(errors as any)?.mapName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Map Name"}
          name="mapName"
        />
        <TextField
          {...register("mapDescription", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.mapDescription}
          helperText={(errors as any)?.mapDescription?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Map Description"}
          name="mapDescription"
        />
        <TextField
          {...register("mapPath", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.mapPath}
          helperText={(errors as any)?.mapPath?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Map Path"}
          name="mapPath"
        />
        <TextField
          {...register("currentMapStatus", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.currentMapStatus}
          helperText={(errors as any)?.currentMapStatus?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Current Map Status"}
          name="currentMapStatus"
        />
        <TextField
          {...register("mapToken", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.mapToken}
          helperText={(errors as any)?.mapToken?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Map Token"}
          name="mapToken"
        />
      </Box>
    </Create>
  );
};
