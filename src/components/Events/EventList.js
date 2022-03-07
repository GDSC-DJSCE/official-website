import React ,{useState, useContext} from "react";
import { ThemeContext } from "../../ThemeContext";
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Card} from '@material-ui/core/';
import AllEvents from './AllEvents';
import Data from '../data.js';

const useStyles = makeStyles((theme) => ({
  grid: {
      marginLeft: 50,
      marginRight: 50,
      marginTop: 10,
    },
  selectBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
      background: "linear-gradient(90deg, #EDEDED 0%, #F1F1F1 49.27%, #EDEDED 100%)",
      borderRadius: "10px",
  },
  selectBarDark: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
      background: "linear-gradient(90deg, #303030 0%, #555555 49.27%, #303030 100%);",
      borderRadius: "10px",
  },
  select: {
      margin: "10px 100px",
      fontStyle: "normal",
      fontWeight: "normal",
      color: "black",
  },
  selectDark: {
      margin: "10px 100px",
      fontStyle: "normal",
      fontWeight: "normal",
      color: "white",
  },
  highlight: {
    fontWeight: "bold",
    // color: "#E94436",
    margin: "10px 100px",
  },
}));


const EventsList = () => {
  const classes = useStyles();
  const [type, setType] = useState(0)
  const {darkMode} = useContext(ThemeContext);
  
  var eventList;
  if(type===1){
    eventList = Data.filter(element => element.type === "session");
  }
  else if(type===2){
    eventList = Data.filter(element => element.type === "festivals");
  }
  else if(type===0){
    eventList = Data;
  }

  return (
    <div className={classes.app}>
        <div className={classes.grid}>
            <Grid container spacing={2} justify="flex-start" alignItems="stretch">
                <Grid item xs={12} sm={12} md={12}>
                    <Card className={darkMode ? classes.selectBarDark : classes.selectBar}>
                        <Grid item xs={12} sm={12} md={4}>
                          <button className={type===0 ? classes.highlight : darkMode ? classes.selectDark : classes.select} onClick={() => setType(0)}>
                            All
                          </button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                          <button className={type===1 ? classes.highlight : darkMode ? classes.selectDark : classes.select} onClick={() => setType(1)}>
                            Sessions
                          </button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                          <button className={type===2 ? classes.highlight : darkMode ? classes.selectDark : classes.select} onClick={() => setType(2)}>Festivals</button>
                        </Grid>
                    </Card>
                </Grid>
              {eventList.map(event => (
                  <Grid item xs={12} sm={12} md={6} lg={4} container key={event.id}>
                      <AllEvents
                          key={event.id}
                          id={event.id}
                          title={event.title}
                          date={event.date}
                          summary={event.summary}
                          bgimage={event.bgimage}
                      /> 
                  </Grid>
                ))}
            </Grid>
        </div>
        <br />
    </div>
  );
};

export default EventsList;