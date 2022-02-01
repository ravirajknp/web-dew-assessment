import { Button } from "@mui/material";
import React from "react";
import walleteimage from "../../assets/walleteimage.png";
// import AppleIcon from '@mui/icons-material/Apple';
import "./index.css";

const TrioWallet = () => {
  return (
    <div className="triowallet">
      <div className="wallet-container">
        <h2 className="wallet-desc">Download TRIO ACE Wallet App Now</h2>
        <p className="wallet-desc">
          Your All-In-One Cryptocurrency Wallet. Manage crypto assets at your
          finger tip. The easiest way to send and receive crypto coins.
        </p>
        <p className="wallet-desc">
          Send and receive TRX and TRC20 tokens, ETH and ERC20 tokens and many
          more.
        </p>
        <div className="store-btns">
          <Button
            sx={{
              ":hover": {
                bgcolor: "#5e2ced",
                color: "#fff",
                border: "2px solid #fff",
              },
              width: "200px",
              background: "#fff",
              color: "#544be5",
              borderRadius: "30px",
              mr: 5,
              fontSize: "1.2rem",
              textTransform: "capitalize",
            }}
          >
            Google Play
          </Button>
          <Button
            sx={{
              ":hover": {
                bgcolor: "#fff",
                color: "#5e2ced",
              },
              bgcolor: "#8965f2",
              color: "#fff",
              fontSize: "1.2rem",
              border: "2px solid #fff",
              borderRadius: "30px",
              textTransform: "capitalize",
              width: "200px",
            }}
          >
            App Store
          </Button>
        </div>
      </div>

      <div className="wallet-img-container">
        <img src={walleteimage} alt="walletimg" />
      </div>
    </div>
  );
};

export default TrioWallet;
