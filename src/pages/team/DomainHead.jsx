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
    marginTop: "27px",
    display: "flex",
    justifyContent: "center",
  },
  back: {
    display: "flex",
    flexDirection: "row",
    marginTop: "38px",
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
              fontWeight: "400",
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
        <div style={{ margin: "0 0.8%" }}>
          <TCard />
        </div>
        <div style={{ margin: "0 5.5%" }}>
          <TCard />
        </div>
        <div style={{ margin: "0 5.5%" }}>
          <TCard />
        </div>
        <div style={{ margin: "0 0.8%" }}>
          <TCard />
        </div>
      </Container>
      <Link>
        <Container className={classes.back}>
          <img src={back} alt="back" />
          <Typography
            style={{
              fontFamily: " Montserrat",
              fontSize: "24px",
              lineHeight: "29px",
              padding: "0 10px",
            }}
          >
            Back
          </Typography>
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
