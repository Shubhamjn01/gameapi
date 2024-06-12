import { Autocomplete, Box, FormControlLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { ReactElement, JSXElementConstructor } from "react";
import { Controller, ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn } from "react-hook-form";

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
    <Create isLoading={formLoading}  saveButtonProps={saveButtonProps}>
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
        {/* <TextField
          {...register("mapId", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.mapId}
          helperText={(errors as any)?.mapId?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Map Id"}
          name="mapId"
        /> */}
        <Controller
          control={control}
          name={"mapId"}
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
                  label={"Map Id"}
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
       
        {/* <Autocomplete
            
          
          multiple={true}
          id="tag"
          options={tagAutocompleteProps.options.map((option) => option?.tagString)}
          
          
          renderInput={(params) => (
            <TextField {...params} label="Tags" placeholder="Tags"      error={!!(errors as any)?.tag}
            helperText={(errors as any)?.tag?.message}/>
          )}
        /> */}

    <Controller
          control={control}
          name={"tag"}
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={null as any}
          
          render={({ field }) => (
            <Autocomplete
            multiple
            
              {...tagAutocompleteProps}
              {...field}
              onChange={(_, value:any) => {
                field.onChange(value.tagId);
                
              }}
              value={getValues().tag ?? []}
             
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
              // isOptionEqualToValue={(option, value) => {
              //   const optionId = option?.tagId?.toString();
              //   const valueId =
              //     typeof value === "object"
              //       ? value?.tagId?.toString()
              //       : value?.toString();
              //   return value === undefined || optionId === valueId;
              // }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Tags"}
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.tag}
                  helperText={(errors as any)?.tag?.message}
                  required
                />
              )}
            />
          )}
        />
        <TextField
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
        />
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
        <FormControlLabel  control={<Switch title="isAccepted" defaultChecked  {...register("isAccepted", {
            required: "This field is required",
          })}/>} label="isAccepted" name="isAccepted"/>
        
      </Box>
    </Create>
  );
};
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
]