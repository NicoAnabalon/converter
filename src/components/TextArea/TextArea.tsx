import { TextField, useTheme } from "@mui/material";

const darkStyle = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& label.Mui-focused": {
    color: "white",
  },
  width: "48%",
  height: "100%",
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
  const theme = useTheme();

  const getStyle = (theme: string) => {
    if (theme === "dark") {
      return;
    }
    return {};
  };

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
        sx={
          theme.palette.mode === "dark"
            ? darkStyle
            : { height: "100%", width: "48%" }
        }
        multiline
        rows={20}
        fullWidth
      />
    );
  }
  return (
    <TextField
      id="outlined-multiline-static"
      label={label}
      placeholder={`Insert ${label} here...`}
      sx={
        theme.palette.mode === "dark" && !editable?.error?.message
          ? darkStyle
          : { minHeight: "100%", width: "48%" }
      }
      InputLabelProps={{
        shrink: true,
      }}
      onChange={(e) => editable?.onChange(e.target.value)}
      multiline
      rows={20}
      fullWidth
      error={editable?.error?.message ? true : false}
      helperText={editable?.error?.message}
    />
  );
};
