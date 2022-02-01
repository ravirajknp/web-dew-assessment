import { Button } from "@mui/material";
import React from "react";
import "./index.css";

const CryptoLabel = () => {
  return (
    <div className="crypto-label">
      <div className="crypto-content">
        Your Crypto's. Exclusive. Get Your Non Custodial wallet
      </div>
      <div className="cry-btn">
        <Button
          sx={{
            ":hover": {
              bgcolor: "#5e2ced",
              color: "#fff",
              border: "2px solid #fff",
            },
            color: "#5e2ced",
            bgcolor: "#fbfbfd",
            padding: "1rem 1.5rem",
            textTransform: "capitalize",
          }}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default CryptoLabel;
