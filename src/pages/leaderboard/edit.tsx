import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const LeaderboardEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    control,
    formState: { errors },
  } = useForm({});

  const blogPostsData = queryResult?.data?.data;

  const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
    resource: "leaderboard",
    defaultValue: blogPostsData?.category?.id,
  });

  const { autocompleteProps: userAutocompleteProps } = useAutocomplete({
    resource: "users",
  });

  const { autocompleteProps: mapAutocompleteProps } = useAutocomplete({
    resource: "map",
  });

  const { autocompleteProps: clusterAutocompleteProps } = useAutocomplete({
    resource: "cluster",
  });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
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
          {...register("timerecord", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.timerecord}
          helperText={(errors as any)?.timerecord?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Time Record"}
          name="timerecord"
        />
        <TextField
          {...register("matchplacing", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.matchplacing}
          helperText={(errors as any)?.matchplacing?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Match Placing"}
          name="matchplacing"
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
          name={"clusterId"}
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              {...clusterAutocompleteProps}
              {...field}
              onChange={(_, value) => {
                field.onChange(value.clusterId);
              }}
              getOptionLabel={(item) => {
                const data = clusterAutocompleteProps?.options?.find((p) => {
                  const itemId =
                    typeof item === "object"
                      ? item?.clusterId?.toString()
                      : item?.toString();
                  const pId = p?.clusterId?.toString();
                  return itemId === pId;
                });

                return data.name ?? ""; // Adjust based on your data structure
              }}
              isOptionEqualToValue={(option, value) => {
                const optionId = option?.clusterId?.toString();
                const valueId =
                  typeof value === "object"
                    ? value?.clusterId?.toString()
                    : value?.toString();
                return value === undefined || optionId === valueId;
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Cluster Id"} // Adjust label as needed
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.clusterId}
                  helperText={(errors as any)?.clusterId?.message}
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
        
      </Box>
    </Edit>
  );
};
