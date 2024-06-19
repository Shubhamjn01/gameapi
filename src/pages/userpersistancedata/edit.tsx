import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const UserPersistanceDataEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    control,
    formState: { errors },
  } = useForm({});

  const blogPostsData = queryResult?.data?.data;

  const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
    resource: "users",
    defaultValue: blogPostsData?.category?.id,
  });

  const { autocompleteProps: userAutocompleteProps } = useAutocomplete({
    resource: "users",
  });

  const { autocompleteProps: clusterAutocompleteProps } = useAutocomplete({
    resource: "cluster",
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
          name={"lastmapAcessedId"}
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
                  label={"Last Map Accessed"}
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.lastmapAcessedId}
                  helperText={(errors as any)?.lastmapAcessedId?.message}
                  required
                />
              )}
            />
          )}
        />
         <TextField
          {...register("screenName", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.screenName}
          helperText={(errors as any)?.screenName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Screen Name"}
          name="screenName"
        />
        <TextField
          {...register("screenStatus", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.screenStatus}
          helperText={(errors as any)?.screenStatus?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Screen Status"}
          name="screenStatus"
        />
        <TextField
          {...register("gameData", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.gameData}
          helperText={(errors as any)?.gameData?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Game Data"}
          name="gameData"
        />
      </Box>
    </Edit>
  );
};
