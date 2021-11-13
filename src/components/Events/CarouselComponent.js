import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card} from '@material-ui/core/';
import Carousel from 'react-elastic-carousel';

const useStyles = makeStyles((theme) => ({
  grid: {
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
    },
}));


const CarouselComponent = () => {
  const classes = useStyles();
  var data = [
    {
      id: 1,
      title: "Events Banner",
    },
    {
      id: 2,
      title: "Lorem Ipsum 1",
    },
    {
      id: 3,
      title: "Lorem Ipsum 2",
    }
  ]
  return (
    <div className={classes.app}>
        <div className={classes.grid}>
        <Carousel> 
            {data.map(item => 
              <Grid item xs={12} sm={12} md={12} key={item.id}>
                <Card style={{height: "300px",background:"black"}}>
                  <div style={{color:'white',display: 'flex', flexDirection:'column', justifyContent: 'center',textAlign:'center'}} key={item.id}>{item.title}</div>
                </Card>
              </Grid>
            )}
        </Carousel>
        </div>
    </div>
  );
};

export default CarouselComponent;