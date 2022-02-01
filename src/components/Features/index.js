import React from 'react';
import Card from '../Card';
import non_custodile_wallet from "../../assets/non-custodile-wallet.png";
import finance from "../../assets/finance.png";
import smart_contract from "../../assets/smart_contract.png";
import multipeer from "../../assets/multipeer.png";
import atomicswap from "../../assets/atomicswap.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './index.css'

const Featurs = () => {
    const cardData = [
        {
          id: 1,
          logo: non_custodile_wallet,
          cardHeading: "Non-Custodial Wallet",
          cardText:
            "A blockchain wallet that lets you have full control of your funds with your private keys. No central bodies have access to your keys, passwords and digital assets. Users will have total anonymity as there is no KYC process for the wallet.",
        },
    
        {
          id: 2,
          logo: finance,
          cardHeading: "A system where financial",
          cardText:
            "products are open to anyone to use and does not rely on companies or institutions such as banks or brokerages to facilitate a transaction. Smart contracts are used to create protocols that replicate existing financial services in a transparent manner.",
        },
        {
          id: 3,
          logo: smart_contract,
          cardHeading: "A self-executing contract ",
          cardText:
            "containing the terms and conditions of an agreement among peers. It is like a digital vending machine where there is no requirement for a clerk or cashier. A set of rules once deployed to the network automates transactions between peers as programmed.",
        },
        {
          id: 4,
          logo: multipeer,
          cardHeading: "Peer to multi peer (P2MP)",
          cardText:
            "The decentralized interactions between parties in a distributed network which assigns tasks and workloads between peers. Here, peers can exchange digital assets or data without intermediaries.",
        },
    
        {
          id: 5,
          logo: atomicswap,
          cardHeading: "Atomic Swap",
          cardText:
            "A technique that allows for quick trade of cryptocurrencies from different blockchain networks from one party to another, without the use of an exchanges or other intermediary.",
        },
      ];
  return <div className='featuer'>
      <Card cardData={cardData} arrow={<ArrowForwardIcon />} heading='Features You Would Love'/>
  </div>;
};

export default Featurs;
