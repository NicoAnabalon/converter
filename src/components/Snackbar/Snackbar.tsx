import {
  Button,
  Snackbar as SnackbarMUI,
  IconButton,
  Alert,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";

interface ISnackbarProps {
  message: string;
}

export default function Snackbar({ message }: ISnackbarProps) {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(() => false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <SnackbarMUI open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </SnackbarMUI>
  );
}
