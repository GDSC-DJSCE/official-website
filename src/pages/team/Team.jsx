// import React from "react";
// import "../../styles/team.css";
// import background from "../../assets/images/team/Team-bg.svg";
// import vector1 from "../../assets/images/team/Vector4.svg";
// import vector2 from "../../assets/images/team/Vector5.svg";
// import vector3 from "../../assets/images/team/Vector1.svg";
// import vector4 from "../../assets/images/team/Vector2.svg";
// import { TCard, THead } from "../../components";

// export const Team = () => {
//   return (
//     <>
//       <div>
//         <img alt="background" className="w-full opacity-60" src={background} />
//         <div className="lg:hidden w-10/12 mx-auto">
//           <THead />
//         </div>
//         <div className="flex flex-row items-end justify-between min-w-min lg:mx-10 xl:team-cont1">
//           <div className="xl:-mb-6 hidden sm:block">
//             <TCard />
//           </div>
//           <div className="xl:w-1/2 lg:w-2/3 hidden lg:block">
//             <THead />
//           </div>
//           <div className="xl:-mb-6 hidden sm:block">
//             <TCard />
//           </div>
//         </div>
//         <div className="flex flex-row justify-center">
//           <div className="mt-12 hidden  xl:block">
//             <img alt="vector" src={vector1} />
//           </div>
//           <div className="lg:mt-10 sm:mt-5 hidden sm:block">
//             <TCard />
//           </div>
//           <div className="mt-32 hidden lg:block">
//             <img alt="vector" src={vector2} />
//           </div>
//           <div className="lg:mt-28 pb-2 sm:mt-16">
//             <TCard />
//           </div>
//           <div className="mt-52 hidden lg:block">
//             <img alt="vector" src={vector3} />
//           </div>
//           <div className="lg:mt-10 sm:mt-5 hidden sm:block">
//             <TCard />
//           </div>
//           <div className="mt-12 hidden xl:block">
//             <img alt="vector" src={vector4} />
//           </div>
//         </div>
//       </div>
//       <div className="sm:hidden">
//         <div className="flex flex-row justify-between py-2 px-8">
//           <TCard />
//           <TCard />
//         </div>
//         <div className="flex flex-row justify-between py-2 px-8">
//           <TCard />
//           <TCard />
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };

import React from "react";
import background from "../../assets/images/team/Team-bg.svg";
import vector1 from "../../assets/images/team/Vector4.svg";
import vector2 from "../../assets/images/team/Vector5.svg";
import vector3 from "../../assets/images/team/Vector1.svg";
import vector4 from "../../assets/images/team/Vector2.svg";
import { TCard, THead } from "../../components";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  topimg: {
    width: "100%",
    opacity: "0.6",
  },
  headSm: {
    width: "670px",
    margin: "0 auto",
    display: "none",
  },
  container1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "end",
    justifyContent: "space-between",
    margin: "0 90px",
  },
  cont1card: {
    marginBottom: "-24px",
  },
  cont1head: {
    width: "100%",
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  vectorend: {
    marginTop: "48px",
  },
  vector2: {
    marginTop: "156px",
  },
  vector3: {
    marginTop: "217px",
  },
  cardend: {
    marginTop: "40px",
  },
  cardcenter: {
    marginTop: "132px",
  },
}));

export const Team = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <img alt="background" className={classes.topimg} src={background} />
        <Container className={classes.headSm}>
          <THead />
        </Container>
        <div className={classes.container1}>
          <div className={classes.cont1card}>
            <TCard />
          </div>
          <div className={classes.cont1head}>
            <THead />
          </div>
          <div className={classes.cont1card}>
            <TCard />
          </div>
        </div>
        <div className={classes.container2}>
          <div className={classes.vectorend}>
            <img alt="vector" src={vector1} />
          </div>
          <div className={classes.cardend}>
            <TCard />
          </div>
          <div className={classes.vector2}>
            <img alt="vector" src={vector2} />
          </div>
          <div className={classes.cardcenter}>
            <Link to="team/domain-head">
              <TCard />
            </Link>
          </div>
          <div className={classes.vector3}>
            <img alt="vector" src={vector3} />
          </div>
          <div className={classes.cardend}>
            <TCard />
          </div>
          <div className={classes.vectorend}>
            <img alt="vector" src={vector4} />
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="flex flex-row justify-between py-2 px-8">
          <TCard />
          <TCard />
        </div>
        <div className="flex flex-row justify-between py-2 px-8">
          <TCard />
          <TCard />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
