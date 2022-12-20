import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Carousel from 'react-elastic-carousel';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

const useStyles = makeStyles((theme) => ({
  grid: {
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
    },
}));



const CarouselComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
        <div className={classes.grid}>
        {/* <Carousel> 
            {data.map(item => 
              <Grid item xs={12} sm={12} md={12} key={item.id}>
                <Card style={{height: "300px",background:"black"}}>
                  <div style={{color:'white',display: 'flex', flexDirection:'column', justifyContent: 'center',textAlign:'center'}} key={item.id}>{item.title}</div>
                </Card>
              </Grid>
            )}
        </Carousel> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/chalkboard-and-colored-balloons-on-a-wooden-background-picture-id1263908025?b=1&k=20&m=1263908025&s=170667a&w=0&h=DDeDvtWSu99Z5yKrbx0X3M26uHGP1SCBV_-zXKS-FSQ="
              alt="First slide"
              style={{height:"400px"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/chalkboard-and-colored-balloons-on-a-wooden-background-picture-id1263908025?b=1&k=20&m=1263908025&s=170667a&w=0&h=DDeDvtWSu99Z5yKrbx0X3M26uHGP1SCBV_-zXKS-FSQ="
              alt="Second slide"
              style={{height:"400px"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/chalkboard-and-colored-balloons-on-a-wooden-background-picture-id1263908025?b=1&k=20&m=1263908025&s=170667a&w=0&h=DDeDvtWSu99Z5yKrbx0X3M26uHGP1SCBV_-zXKS-FSQ="
              alt="Third slide"
              style={{height:"400px"}}
            />
        </Carousel.Item>
      </Carousel>
        </div>
    </div>
  );
};

export default CarouselComponent;