// import React from "react";
// import "../../styles/team.css";
// import { TeamNav, THead, TCard } from "../../components";

// export const DomainHead = () => {
//   return (
//     <div>
//       <THead />
//       <TeamNav />
//       <div className="h-16 w-min mx-auto border-2-green"></div>
//       <div className="w-8/12 mx-auto">
//         <div className="w-full  h-min mx-auto border-2-green"></div>
//         <div className="flex flex-row">
//           <div className="flex w-full justify-between flex-row">
//             <div>
//               <div className="h-9 w-min border-2-green"></div>
//               <div className="h-min w-min border-6-green -mx-1 -mt-2 mb-4"></div>
//             </div>
//             <div className="mr-10">
//               <div className="h-9 w-min border-2-green"></div>
//               <div className="h-min w-min border-6-green -mx-1 -mt-2 mb-4"></div>
//             </div>
//             <div className="ml-10">
//               <div className="h-9 w-min border-2-green"></div>
//               <div className="h-min w-min border-6-green -mx-1 -mt-2 mb-4"></div>
//             </div>
//             <div>
//               <div className="h-9 w-min border-2-green"></div>
//               <div className="h-min w-min border-6-green -mx-1 -mt-2 mb-4"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-10/12 mx-auto">
//         <div className="flex justify-between flex-row">
//           <TCard />
//           <TCard />
//           <div className="w-min"></div>
//           <TCard />
//           <TCard />
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// };

import tree from "../../assets/images/team/Tree.svg";
import back from "../../assets/images/team/Union.svg";
import { Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TCard } from "../../components";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "64px",
    lineHeight: "78px",
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#404040",
    textAlign: "center",
    paddingBottom: "12px",
  },
  center: {
    margin: "0 auto",
    width: "max-content",
  },
  cards: {
    display: "flex",
    justifyContent: "space-evenly",
    maxWidth: "95%",
  },
}));

export const DomainHead = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.header}>Our Team</Typography>
      <Container className={classes.center}>
        <Button
          style={{ borderRadius: "20px", width: "225px" }}
          variant="contained"
        >
          <p
            style={{
              fontSize: "24px",
              fontFamily: "Montserrat",
              textTransform: "none",
            }}
          >
            Domain Heads
          </p>
        </Button>
      </Container>
      <Container style={{ marginTop: "18px" }} className={classes.center}>
        <TCard />
      </Container>
      <img
        style={{ marginTop: "9px" }}
        className={classes.center}
        src={tree}
        alt="branches"
      />
      <Container className={classes.cards}>
        <TCard />
        <TCard />
        <TCard />
        <TCard />
      </Container>
      <Link>
        <Container>
          <img src={back} alt="back" />
          <Typography>Back</Typography>
        </Container>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
