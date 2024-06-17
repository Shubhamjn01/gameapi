import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const ClusterEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    control,
    formState: { errors },
  } = useForm({});

  const blogPostsData = queryResult?.data?.data;

  const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
    resource: "cluster",
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
        <TextField
          {...register("filterTags", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.filterTags}
          helperText={(errors as any)?.filterTags?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Filter Tags"}
          name="filterTags"
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
        <TextField
          {...register("isAccepted", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.isAccepted}
          helperText={(errors as any)?.isAccepted?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"isAccepted"}
          name="isAccepted"
        />
        {/* <TextField
          {...register("isAccepted", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.isAccepted}
          helperText={(errors as any)?.isAccepted?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"isAccepted"}
          name="isAccepted"
        /> */}
      </Box>
    </Edit>
  );
};
