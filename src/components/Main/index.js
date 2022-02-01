import { Button } from "@mui/material";
import React from "react";
import banner from "../../assets/bannerimg.png";
import "./index.css";

const Main = () => {
  return (
    <div className="container">
      <div className="headings">
        <h1>Trio ACE International</h1>
        <h3>Architectured Community Ecosystem</h3>
        <p>
          World First Architectured Community Ecosystem Which Is Automated With
          Three Combined Technologies Consisting BlockChain System, Matrix Board
          System And Digital AI Signature System
        </p>
      </div>
      <div className="log-buttons">
        <Button  sx={{
            ":hover": {
              bgcolor: "#5e2ced",
              color: "#fff",
            },
            bgcolor: "#e8e1fc",
              color: "#5e2ced",
            mr: 2,
            padding: '.5rem 1rem',
            width:'100px',
            textTransform:'capitalize'

          }}>
          Sign Up
        </Button>
        <Button sx={{
            ":hover": {
              bgcolor: "#00c99c",
              color: "#fff",
            },
            fontSize: "1rem",
            bgcolor: "#d4f6ee",
              color: "#00c99c",
              padding: '.5rem 1rem',
              width:'100px',
              textTransform:'capitalize'
          }}>Login</Button>
      </div>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Main;
