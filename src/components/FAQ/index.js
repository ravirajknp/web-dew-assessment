import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import './index.css'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="faq">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            {" "}
            Why Trio Ace is introduced as a matrix board crowdfunding programme?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is designed this way to build a strong community database and to
            reward members that help grow the reach of the programme through
            networking. This database built over time then becomes a platform to
            design future ventures such as *insert roadmap teaser*. There are
            various propositions to give back to the community via philanthropy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Why join Trio Ace International? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            • To be part of history in the making. Technology and innovation are
            inevitable. By being a member in this reliable programme,
            opportunity is created for each member to learn about and generate
            digital assets for the future. Trio Ace is reliable for various
            reasons; a. This programme is automated via smart contract meaning
            there is no human interference. It is accurate, fast, efficient,
            stores records automatically and removes possibility of error or
            manipulation. b. The ledgers stored are transparent and are viewable
            via Tronscan. A member can also see the real time peer to peer
            transfers and verify that there is no money held by the organisation
            (balance = 0 USD). c. The wallet is a non-custodial which means your
            privacy and security is maintained. Members will have full control
            of their funds with their own private keys. The funds in the wallet
            are not accessible by the organisation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            can the system cease operating? what are the risk?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. There are no funds held by the organisation, thus it cannot be
            exploited by shutting down the programme. The smart contract
            redirects the funds between participants in the programmed manner.
            All transfers are made irrevocably between participants in real
            time. The transferred funds are made to the participant’s
            non-custodial HD wallet where privacy is maintained and security is
            high.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            can the system cease operating? what are the risk?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. There are no funds held by the organisation, thus it cannot be
            exploited by shutting down the programme. The smart contract
            redirects the funds between participants in the programmed manner.
            All transfers are made irrevocably between participants in real
            time. The transferred funds are made to the participant’s
            non-custodial HD wallet where privacy is maintained and security is
            high.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            can the system cease operating? what are the risk?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. There are no funds held by the organisation, thus it cannot be
            exploited by shutting down the programme. The smart contract
            redirects the funds between participants in the programmed manner.
            All transfers are made irrevocably between participants in real
            time. The transferred funds are made to the participant’s
            non-custodial HD wallet where privacy is maintained and security is
            high.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
