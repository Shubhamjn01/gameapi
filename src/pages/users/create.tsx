import { Autocomplete, Box, MenuItem, Select, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const UserCreate = () => {
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
          {...register("firstName", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.firstName}
          helperText={(errors as any)?.firstName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"First Name"}
          name="firstName"
        />
        <TextField
          {...register("lastName", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.lastName}
          helperText={(errors as any)?.lastName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Last Name"}
          name="lastName"
        />
        <TextField
          {...register("email", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.email}
          helperText={(errors as any)?.email?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="email"
          label={"Email Address"}
          name="email"
        />
        <TextField
          {...register("password", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.password}
          helperText={(errors as any)?.password?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="password"
          label={"Password"}
          name="password"
        />
      </Box>
    </Create>
  );
};
