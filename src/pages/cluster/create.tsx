import {
  Autocomplete,
  Box,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const ClusterCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const { autocompleteProps: mapAutocompleteProps } = useAutocomplete({
    resource: "map",
  });
  const { autocompleteProps: userAutocompleteProps } = useAutocomplete({
    resource: "users",
  });
  const { autocompleteProps: tagAutocompleteProps } = useAutocomplete({
    resource: "tag",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("name", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.name}
          helperText={(errors as any)?.name?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Name"}
          name="name"
        />
        <TextField
          {...register("clusterReport", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.clusterReport}
          helperText={(errors as any)?.clusterReport?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Cluster Report"}
          name="clusterReport"
        />
        <TextField
          {...register("type", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.type}
          helperText={(errors as any)?.type?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Type"}
          name="type"
        />
        <Controller
          control={control}
          name={"userId"}
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              {...userAutocompleteProps}
              {...field}
              onChange={(_, value) => {
                field.onChange(value.userId);
              }}
              getOptionLabel={(item) => {
                const data = userAutocompleteProps?.options?.find((p) => {
                  const itemId =
                    typeof item === "object"
                      ? item?.userId?.toString()
                      : item?.toString();
                  const pId = p?.userId?.toString();
                  return itemId === pId;
                });

                return data.firstName + " " + data.lastName ?? "";
              }}
              isOptionEqualToValue={(option, value) => {
                const optionId = option?.userId?.toString();
                const valueId =
                  typeof value === "object"
                    ? value?.userId?.toString()
                    : value?.toString();
                return value === undefined || optionId === valueId;
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"User Id"}
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.userId}
                  helperText={(errors as any)?.userId?.message}
                  required
                />
              )}
            />
          )}
        />

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
        <Controller
          control={control}
          name={"defaultMapId"}
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              // multiple

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
                  label={"Default Map"}
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.defaultMapId}
                  helperText={(errors as any)?.defaultMapId?.message}
                  required
                />
              )}
            />
          )}
        />

        <Controller
          control={control}
          name={"filterTags"}
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              multiple
              {...tagAutocompleteProps}
              {...field}
              onChange={(_, value: any) => {
                const data = value.map((i: any) => {
                  if (i?.tagId) {
                    return i.tagId;
                  } else {
                    return i;
                  }
                });
                console.log(data);
                field.onChange(data);
              }}
              value={getValues().filterTags ?? []}
              getOptionLabel={(item) => {
                return (
                  tagAutocompleteProps?.options?.find((m) => {
                    const itemId =
                      typeof item === "object"
                        ? item?.tagId?.toString()
                        : item?.toString();
                    const mId = m?.tagId?.toString();
                    return itemId === mId;
                  })?.tagString ?? ""
                );
              }}
              isOptionEqualToValue={(option, value) => {
                const optionId = option?.tagId?.toString();
                const valueId =
                  typeof value === "object"
                    ? value?.tagId?.toString()
                    : value?.toString();
                return value === undefined || optionId === valueId;
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Filter Tags"}
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.filterTags}
                  helperText={(errors as any)?.filterTags?.message}
                  required
                />
              )}
            />
          )}
        />
        {/* <TextField
          {...register("defaultMapId", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.defaultMapId}
          helperText={(errors as any)?.defaultMapId?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Default Map Id"}
          name="defaultMapId"
        /> */}
        <TextField
          {...register("SpawnableMaps", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.SpawnableMaps}
          helperText={(errors as any)?.SpawnableMaps?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Spawnable Maps"}
          name="SpawnableMaps"
        />

        <TextField
          {...register("clusterVersion", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.clusterVersion}
          helperText={(errors as any)?.clusterVersion?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Cluster Version"}
          name="clusterVersion"
        />
        {/* <TextField
          {...register("clusterVersion", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.clusterVersion}
          helperText={(errors as any)?.clusterVersion?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Cluster Version"}
          name="clusterVersion"
        /> */}
        <TextField
          {...register("clusterToken", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.clusterToken}
          helperText={(errors as any)?.clusterToken?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Cluster Token"}
          name="clusterToken"
        />
        <FormControlLabel
          control={
            <Switch
              title="isAccepted"
              defaultChecked
              {...register("isAccepted", {
                required: "This field is required",
              })}
            />
          }
          label="isAccepted"
          name="isAccepted"
        />
      </Box>
    </Create>
  );
};
