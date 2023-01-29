import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox(props) {
  const { options, label, onChange } = props;

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onSelect={onChange}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} placeholder={label} />}
    />
  );
}
