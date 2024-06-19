import { Autocomplete, Box, MenuItem, Select, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const TokenCreate = () => {
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
        <TextField
          {...register("token", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.token}
          helperText={(errors as any)?.token?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Token"}
          name="token"
        />
      </Box>
    </Create>
  );
};
