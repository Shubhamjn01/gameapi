import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const ActiveMapEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    control,
    formState: { errors },
  } = useForm({});

  const blogPostsData = queryResult?.data?.data;

  const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
    resource: "activemap",
    defaultValue: blogPostsData?.category?.id,
  });

  const { autocompleteProps: mapAutocompleteProps } = useAutocomplete({
    resource: "map",
  });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <Controller
          control={control}
          name={"mapId"}
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              {...mapAutocompleteProps}
              {...field}
              onChange={(_, value) => {
                field.onChange(value.mapId);
              }}
              getOptionLabel={(item) => {
                return (
                  mapAutocompleteProps?.options?.find((m) => {
                    const itemId =
                      typeof item === "object"
                        ? item?.mapId?.toString()
                        : item?.toString();
                    const mId = m?.mapId?.toString();
                    return itemId === mId;
                  })?.mapName ?? ""
                );
              }}
              isOptionEqualToValue={(option, value) => {
                const optionId = option?.mapId?.toString();
                const valueId =
                  typeof value === "object"
                    ? value?.mapId?.toString()
                    : value?.toString();
                return value === undefined || optionId === valueId;
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Map"}
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.mapId}
                  helperText={(errors as any)?.mapId?.message}
                  required
                />
              )}
            />
          )}
        />
        <TextField
          {...register("mapURLPath", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.mapURLPath}
          helperText={(errors as any)?.mapURLPath?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Map URL"}
          name="mapURLPath"
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
        <TextField
          {...register("populationLimit", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.populationLimit}
          helperText={(errors as any)?.populationLimit?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Population Limit"}
          name="populationLimit"
        />
        <TextField
          {...register("currentPopulation", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.currentPopulation}
          helperText={(errors as any)?.currentPopulation?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Current Population"}
          name="currentPopulation"
        />
      </Box>
    </Edit>
  );
};
