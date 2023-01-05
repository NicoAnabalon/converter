import { Box, Link, Typography, useTheme } from "@mui/material";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { GzipToJSON, Home } from "./views";

function App() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? "#171717" : null,
      }}
    >
      <Navbar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gzip-to-json" element={<GzipToJSON />} />
        </Routes>
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            textAlign: "center",
            color: theme.palette.mode === "dark" ? "white" : null,
          }}
        >
          By{" "}
          <Link
            href="https://github.com/NicoAnabalon"
            target="_blank"
            sx={{ textDecoration: "none" }}
          >
            @NicoAnabalon
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
