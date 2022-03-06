import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext";
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
  },
  body: {
    marginTop: "15px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: " 400",
    lineHeight: "33px",
    letterSpacing: "0em",
  },
}));

export const THead = () => {
  const classes = useStyles();
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="thead">
        <Container className={classes.container}>
          <p
            className={classes.head}
            style={{ color: darkMode ? "#adadad" : "#404040" }}
          >
            Our Team
          </p>
          <p
            className={classes.body}
            style={{ color: darkMode ? "#adadad" : "#535353" , fontSize:"20px" }}
          >
            Meet the team that makes GDSC DJSCE Successful! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptates laudantium
            accusamus itaque in dolorum rem culpa amet impedit. Voluptas, totam.
          </p>
        </Container>
      </div>
    </>
  );
};
