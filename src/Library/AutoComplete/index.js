import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox(props) {
  const { options, label, onChange, value } = props;

  return (
    <Autocomplete
      disablePortal
      value={value}
      // isOptionEqualToValue={(option, value) => option.value !== value.value}
      // freeSolo={true}
      id="combo-box-demo"
      onChange={(_event, newTerm) => onChange(newTerm)}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} placeholder={label} />}
    />
  );
}
