import { Box, useTheme } from "@mui/material";
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
    </Box>
  );
}

export default App;
