import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    maxWidth: "700px",
    padding: 0,
  },
  head: {
    fontSize: "64px",
    lineHeight: "78px",
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#404040",
  },
  body: {
    marginTop: "15px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: " 400",
    lineHeight: "33px",
    letterSpacing: "0em",
    color: "#535353",
  },
}));

export const THead = () => {
  const classes = useStyles();

  return (
    <>
      <div className="thead">
        <Container className={classes.container}>
          <p className={classes.head}>Our Team</p>
          <p className={classes.body}>
            Meet the team that makes GDSC DJSCE Successful! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptates laudantium
            accusamus itaque in dolorum rem culpa amet impedit. Voluptas, totam.
          </p>
        </Container>
      </div>
    </>
  );
};
