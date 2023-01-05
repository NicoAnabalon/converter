import { Box } from "@mui/material";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { GzipToJSON, Home } from "./views";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
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
