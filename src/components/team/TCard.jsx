// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";

// export const TCard = () => {
//   return (
//     <>
//       <div
//         id="team-card"
//         className="border-2 mx-5 tcard-max-d tcard-shadow  rounded-2xl"
//       >
//         <div className="mt-4">
//           <img
//             className="rounded-full mx-auto border-blue border-4"
//             src="http://lorempixel.com/150/150/people/"
//             alt="profile"
//             width="70px"
//           />
//         </div>
//         <div className="mx-auto text-center w-max mt-1">
//           <p className="font-medium text-lg ">Soham Dave</p>
//           <p className="text-sm -mt-1">GDSC DJSCE LEAD</p>
//         </div>
//         <div
//           id="team-icons"
//           className="text-center flex justify-between px-7 text-white mt-2"
//         >
//           <Link to="/team/lead">
//             <FontAwesomeIcon icon={faLinkedin} size="lg" />
//           </Link>
//           <Link to="/team/lead">
//             <FontAwesomeIcon icon={faInstagram} size="lg" />
//           </Link>
//           <Link to="/team/lead">
//             <FontAwesomeIcon icon={faGithub} size="lg" />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "2px",
    width: "165px",
    height: "180px",
    boxShadow:
      "4px 0px 20px rgba(0, 0, 0, 0.05),-4px 10px 20px rgba(0, 0, 0, 0.05)",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "#4385f3",
    },
  },
  image: {
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "7px",
    border: "3px solid #4385f3",
  },
  content: {
    padding: "0",
  },
  p1: {
    fontFamily: "Montserrat, sans-serif",
    textAlign: "center",
    margin: "0",
    lineHeight: "22px",
    fontWeight: "600",
  },
  p2: {
    fontFamily: "Montserrat, sans-serif",
    marginBottom: "9px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "17px",
  },
  action: {
    color: "white",
    fontSize: "17px",
    margin: "0 26px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const TCard = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.container}>
        <CardMedia
          component="img"
          src="http://lorempixel.com/150/150/people/"
          alt="profile"
          height="70px"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.p1}>Soham Dave</Typography>
          <p className={classes.p2}>GDSC DJSCE LEAD</p>
        </CardContent>
        <div className={classes.action}>
          <Link to="/team/lead">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Link>
          <Link to="/team/lead">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </Link>
          <Link to="/team/lead">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
        </div>
      </Card>
    </>
  );
};
