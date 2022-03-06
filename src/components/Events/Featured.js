import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, Typography} from '@material-ui/core/';
import Chip from '@material-ui/core/Chip';
import Data from '../data.js';

const useStyles = makeStyles((theme) => ({
    item: {
        margin: 10,
        padding: 0,
    },
    innerCard: {
        marginTop: 75,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    grid: {
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
    },
    x: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
}));

const Featured = () => {
  const classes = useStyles();
  var featured_event = Data.filter(element => element.status === "featured");
  var upcoming_event = Data.filter(element => element.status === "upcoming");
  return (
    <div className={classes.app}>
        <div className={classes.grid}>
            <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
                {featured_event.map(event => (
                    <Grid item xs={12} sm={12} md={7}  key={event.id}>
                        <Card style={{height: "300px",background: `url(${event.bannerimage}) no-repeat`,
                        backgroundSize: "100% 100%"}}>
                            <div className={classes.x}>
                                <Link to={`/events/${event.id}`} className={classes.links}>
                                    <Typography variant="h5" component="h5" style={{marginLeft: "20px",color:'white',marginTop: "10px"}}>
                                        {event.title}
                                    </Typography>
                                </Link>
                                <Chip label="Featured" color="primary" style={{marginRight: "20px",marginTop: "10px"}}/>
                            </div>
                            <Typography variant="p" component="p" style={{marginLeft: "20px",color:'white',marginTop: "225px"}}>
                                Description of Event
                            </Typography>
                        </Card>
                    </Grid>
                ))}
                {upcoming_event.map(event => (
                    <Grid item xs={12} sm={12} md={5}  key={event.id}>
                    <Card style={{height: "300px",background: `url(${event.bannerimage}) no-repeat`,
                        backgroundSize: "200% 100%"}}>
                        <div className={classes.x}>
                            <Link to={`/events/${event.id}`} className={classes.links}>
                                <Typography variant="h5" component="h5" style={{marginLeft: "20px",color:'white',marginTop: "10px"}}>
                                    {event.title}
                                </Typography>
                            </Link>
                            <Chip label="Upcoming" color="secondary" style={{marginRight: "20px",marginTop: "10px"}}/>
                        </div>
                        <Typography variant="p" component="p" style={{marginLeft: "20px",color:'white',marginTop: "225px"}}>
                            Mark Your Calendar
                        </Typography>
                    </Card>
                    </Grid>
                ))}
                
            </Grid>
        </div>
    </div>
  );
};

export default Featured;