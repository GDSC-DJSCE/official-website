import React, {useState} from "react";
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
  select: {
      margin: "10px 100px",
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      color: "black",
  },
}));


const EventsList = () => {
  const classes = useStyles();
  const [type, setType] = useState(0)
  
  var eventList;
  if(type===1){
    eventList = Data.filter(element => element.type === "session");
  }
  else if(type===2){
    eventList = Data.filter(element => element.type === "workshop");
  }
  else if(type===0){
    eventList = Data;
  }

  return (
    <div className={classes.app}>
        <div className={classes.grid}>
            <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
                <Grid item xs={12} sm={12} md={12}>
                    <Card className={classes.selectBar}>
                        <Grid item xs={12} sm={12} md={4}>
                          <button className={classes.select} onClick={() => setType(0)}>All</button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                          <button className={classes.select} onClick={() => setType(1)}>Sessions</button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                          <button className={classes.select} onClick={() => setType(2)}>Workshop</button>
                        </Grid>
                    </Card>
                </Grid>
              {eventList.map(event => (
                  <Grid item xs={12} sm={12} md={3}  key={event.id}>
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