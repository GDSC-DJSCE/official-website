import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 200,
    marginBottom: 20,
  },
  item: {
    margin: 10,
    padding: 0,
  },
  links: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "blue",
    },
  },
  darklinks: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "grey",
    },
  },
}));
const AllEvents = ({ id, title, date, summary, bgimage }) => {
  const classes = useStyles();
  const {darkMode} = useContext(ThemeContext);

  return (
    <Card
      style={{
        background: `url(${bgimage}) no-repeat`,
        backgroundSize: "100% 66%",
        marginTop:'30px',
        margin:'30px auto',
        width:'350px',
        alignItems:'center'
      }}
    >
      <Grid className={classes.grid} item xs={12} sm={12} md={12} key={id}>
        <Card style={{ backgroundColor: darkMode?"#1F1B24":"#F6F9FB",color:darkMode?"white":"black" }}>
          <div className={classes.item}>
            <Link to={`/events/${id}`} className={darkMode?classes.darklinks:classes.links} style={{fontSize:'30px'}}>
              <Typography>
                {title}
              </Typography>
            </Link>
            <Typography variant="p" component="p">
              {date}
            </Typography>
            <Typography variant="p" component="p">
              {summary}
            </Typography>
          </div>
        </Card>
      </Grid>
    </Card>
  );
};
export default AllEvents;
