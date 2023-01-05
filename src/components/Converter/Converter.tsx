import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { TextArea } from "../";
import Snackbar from "../Snackbar/Snackbar";

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
  const theme = useTheme();
  const [messageCopied, setMessageCopied] = useState<boolean>(false);

  const handleCopy = () => {
    if (convertedValue) {
      navigator.clipboard.writeText(convertedValue);
      setMessageCopied(() => true);
      setTimeout(() => {
        setMessageCopied(() => false);
      }, 3000);
    }
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          margin: "auto",
          height: "90%",
          width: "90%",
          textAlign: "center",
          backgroundColor: "",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            height: { xs: "6.5%", sm: "10%", md: "15%" },
            padding: "10px 0 0",
            boxSizing: "border-box",
            fontSize: { xs: "1.3rem", sm: "2rem", md: "3rem" },
          }}
        >{`${from} to ${to}`}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: { xs: "83.5%", sm: "80%", md: "75%" },
            width: "90%",
            margin: "auto",
            padding: "10px 0 0",
            boxSizing: "border-box",
          }}
        >
          <TextArea
            label={from}
            editable={{ onChange, error: { message: errorMessage } }}
          />
          <TextArea label={to} readonly={{ value: convertedValue }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10%",
            width: "90%",
            margin: "auto",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: theme.palette.mode === "dark" ? "white" : null,
              color: theme.palette.mode === "dark" ? "white" : null,
              ":hover": {
                borderColor: theme.palette.mode === "dark" ? "white" : null,
              },
            }}
            onClick={handleCopy}
          >
            Copy Converted Value
          </Button>
        </Box>
      </Paper>
      {messageCopied ? <Snackbar message="Converted value copied" /> : null}
    </>
  );
};
