import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  ButtonGroup,
  useTheme,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ColorModeContext } from "../..";

const pages: { display: string; link: string }[] = [
  { display: "JSON to GZIP in Base64", link: "/" },
  { display: "GZIP in Base64 to JSON", link: "/gzip-to-json" },
  //{ display: "JSON to GZIP", link: "/test2" },
];

export const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (link: string) => {
    handleCloseNavMenu();
    navigate(link);
  };

  const handleTheme = () => {
    const newTheme = theme.palette.mode === "light" ? "dark" : "light";
    localStorage.setItem("selectedTheme", newTheme);
    colorMode.toggleColorMode();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CONVERTER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              MenuListProps={{
                style: {
                  backgroundColor:
                    theme.palette.mode === "light" ? "#1976d2" : undefined,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.display}
                  sx={{
                    border: "1px solid",
                    color: "white",
                    borderColor:
                      pathname === page.link ? "white" : "transparent",
                  }}
                  onClick={() => handleClick(page.link)}
                >
                  <Typography textAlign="center">{page.display}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CONVERTER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <ButtonGroup variant="text">
              {pages.map((page) => (
                <Button
                  key={page.display}
                  onClick={() => handleClick(page.link)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    borderColor: "white !important",
                    ":hover": {
                      backgroundColor:
                        theme.palette.mode === "light" ? "#0288d1" : undefined,
                    },
                  }}
                  variant={pathname === page.link ? "outlined" : "text"}
                >
                  {page.display}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ ml: 1 }} onClick={handleTheme} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
