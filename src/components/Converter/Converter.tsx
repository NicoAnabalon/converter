import { Box, Paper, Typography } from "@mui/material";
import { TextArea } from "../";

interface IConverterProps {
  from: string;
  to: string;
  onChange: (text: string) => void;
  convertedValue: string;
  errorMessage: string;
}

export const Converter = ({
  from,
  to,
  onChange,
  convertedValue,
  errorMessage,
}: IConverterProps) => {
  return (
    <Paper
      elevation={3}
      sx={{ margin: "auto", height: "90%", width: "90%", textAlign: "center" }}
    >
      <Typography
        variant="h2"
        sx={{ height: "15%", padding: "10px 0 0" }}
      >{`${from} to ${to} Converter`}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80%",
          width: "90%",
          margin: "auto",
        }}
      >
        <TextArea
          label={from}
          editable={{ onChange, error: { message: errorMessage } }}
        />
        <TextArea label={to} readonly={{ value: convertedValue }} />
      </Box>
    </Paper>
  );
};
