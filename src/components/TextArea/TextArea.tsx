import { TextField } from "@mui/material";

const style = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& label.Mui-focused": {
    color: "white",
  },
};

interface ITextAreaProps {
  label: string;
  readonly?: {
    value: string;
  };
  editable?: {
    onChange: (text: string) => void;
    error?: { message: string };
  };
}

export const TextArea = ({ label, readonly, editable }: ITextAreaProps) => {
  if (readonly) {
    return (
      <TextField
        id="outlined-multiline-static"
        label={label}
        placeholder={`Insert ${label} here...`}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: true,
        }}
        value={readonly.value}
        sx={style}
        multiline
        rows={10}
        fullWidth
      />
    );
  }
  return (
    <TextField
      id="outlined-multiline-static"
      label={label}
      placeholder={`Insert ${label} here...`}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={(e) => editable?.onChange(e.target.value)}
      sx={editable?.error?.message ? null : style}
      multiline
      rows={10}
      fullWidth
      error={editable?.error?.message ? true : false}
      helperText={editable?.error?.message}
    />
  );
};
