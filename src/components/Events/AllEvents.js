import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Card, Typography} from '@material-ui/core/';

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
}));
const AllEvents = ({ id, title, date, summary, bgimage }) => {
  const classes = useStyles();

  return (
    <div className="main">
      <Card style={{background: `${bgimage}`}}>
        <Card className={classes.innerCard}>
          <div className={classes.item}>
            <Link to={`/events/${id}`} className={classes.links}>
                <Typography variant="h4" component="h4">
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
      </Card>
    </div>
  );
};
export default AllEvents;