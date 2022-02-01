import { Box, Button } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import "./index.css";

const Header = ({ color }) => {
  return (
    <header className="header">
    
        <Box className="logo-wap">
          <img src={logo} alt="logo" className="logo" />
        </Box>
        <Box>
          <Button
            sx={{
              ":hover": {
                bgcolor: "#5e2ced",
                color: "#fff",
              },
              bgcolor: "#e8e1fc",
              color: "#5e2ced",
              padding: ".5rem 1rem",
              mr: 2,
              textTransform:'capitalize'
            }}
          >
            Marketing Tools
          </Button>
          <Button
            sx={{
              ":hover": {
                bgcolor: "#00c99c",
                color: "#fff",
              },
              fontSize: "1rem",
              bgcolor: "#d4f6ee",
              color: "#00c99c",
              padding: ".5rem 1rem",
              width: "150px",
              textTransform:'capitalize'
            }}
          >
            Contact Us
          </Button>
        </Box>
    </header>
  );
};

export default Header;

// sx={{
//   ':hover': {
//     bgcolor: 'primary.main',
//     color: 'white',
//   },
// }}
