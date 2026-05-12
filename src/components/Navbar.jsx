import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Assests/Kannan Infra Projects Logo.jpg";

// Use hash targets instead of full paths
const navLinks = [
  { label: "HOME", id: "" },
  { label: "ABOUT US", id: "about" },
  { label: "READY MIX", id: "readymix" },
  { label: "K BLOCKS", id: "kblocks" },
  { label: "BLUE METALS", id: "bluemetals" },
  { label: "CONTACT US", id: "contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigation = (id) => {
    const element = id ? document.getElementById(id) : document.body;
    if (element) {
      window.history.pushState(null, '', `#${id}`);
      element.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid #E5F1FF",
          zIndex: 1300,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation(""); }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "80px", maxWidth: "200px", cursor: "pointer" }}
              />
            </a>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((item, index) => (
              <Typography
                key={index}
                onClick={() => handleNavigation(item.id)}
                sx={{
                  fontSize: "12px",
                  color: "#5C6066",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontWeight: 500,
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": {
                    color: "#FEA515",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#FEA515",
                    bottom: -4,
                    left: 0,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navLinks.map((item, index) => (
              <ListItem button key={index} onClick={() => handleNavigation(item.id)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
