import { Autocomplete, Box, MenuItem, Select, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const PassportCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
  } = useForm({});

  const { autocompleteProps: platformAutocompleteProps } = useAutocomplete({
    resource: "platform",
  });
  const { autocompleteProps: userAutocompleteProps } = useAutocomplete({
    resource: "users",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("userplatformAuth", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.platformId}
          helperText={(errors as any)?.platformId?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"User Platform Auth"}
          name="userplatformAuth"
        />

        <TextField
          {...register("userplatformId", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.userplatformId}
          helperText={(errors as any)?.userplatformId?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"User Platform ID"}
          name="userplatformId"
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
                  label={"User"}
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.user?.id}
                  helperText={(errors as any)?.user?.id?.message}
                  required
                />
              )}
            />
          )}
        />

        <Controller
          control={control}
          name={"platformId"}
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              {...platformAutocompleteProps}
              {...field}
              onChange={(_, value) => {
                field.onChange(value.platformId);
              }}
              getOptionLabel={(item) => {
                return (
                  platformAutocompleteProps?.options?.find((p) => {
                    const itemId =
                      typeof item === "object"
                        ? item?.platformId?.toString()
                        : item?.toString();
                    const pId = p?.platformId?.toString();
                    return itemId === pId;
                  })?.platformName ?? ""
                );
              }}
              isOptionEqualToValue={(option, value) => {
                const optionId = option?.platformId?.toString();
                const valueId =
                  typeof value === "object"
                    ? value?.platformId?.toString()
                    : value?.toString();
                return value === undefined || optionId === valueId;
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Platform"}
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.platform?.id}
                  helperText={(errors as any)?.platform?.id?.message}
                  required
                />
              )}
            />
          )}
        />
      </Box>
    </Create>
  );
};
