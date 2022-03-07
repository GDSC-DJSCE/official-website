import React ,{useContext} from "react";
import { ThemeContext } from "../ThemeContext";
import { useParams } from "react-router-dom";
import {Grid,Card} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import {useMediaQuery,useTheme } from "@material-ui/core";
import Data from '../components/data.js';

const useStyles = makeStyles((theme) => ({
    grid: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: -50,
        marginBottom: 50,
    },
    top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        borderBottom: "5px solid #4385F3",
    },
    darktop: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        borderBottom: "5px solid white",
    },
    title: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "30px",
        marginLeft: "20px",   
        marginTop: "20px",   
    },
    darktitle: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "30px",
        marginLeft: "20px",   
        marginTop: "20px",  
        color:'white' 
    },
    date: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        marginRight: "10px",
        marginTop: "40px",
        color: "#575757",
    },
    darkdate: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        marginRight: "10px",
        marginTop: "40px",
        color: "white",
    },
    description: {
        margin: "10px 10px 0px 10px",
        fontSize:"20px",
        padding:"10px",
        color:'grey',
        textAlign:'justify'
    },
    darkdescription: {
        margin: "10px 10px 0px 10px",
        fontSize:"20px",
        padding:"10px",
        color:'white',
        textAlign:'justify'
    },
    googleDots: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        textAlign: "center",
        marginRight: "8px",
        marginBottom: "10px",
    },
    dot1: {
        height: "20px",
        width: "20px",
        backgroundColor: "#4385F3",
        borderRadius: "50%",
        margin: "5px 2px",
    },
    dot2: {
        height: "20px",
        width: "20px",
        backgroundColor: "#E94436",
        borderRadius: "50%",
        margin: "5px 2px",
    },
    dot3: {
        height: "20px",
        width: "20px",
        backgroundColor: "#FABC05",
        borderRadius: "50%",
        margin: "5px 2px",
    },
    dot4: {
        height: "20px",
        width: "20px",
        backgroundColor: "#109D58",
        borderRadius: "50%",
        margin: "5px 2px",
    },
    darkMode: {
        backgroundColor:'#1F1B24'
    },
  }));

export default function EventsDetail() {
    const classes = useStyles();
    const { id } = useParams();
    var event = Data.filter(element => element.id===Number(id));
    const { darkMode } = useContext(ThemeContext);
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <div>
            {event.map(x => (
                <div>
                    <Card style={{background: `url(${isMobile?x.bgimage:x.bannerimage}) no-repeat`,backgroundSize: isMobile?("100% 100%"):"cover",height: "450px"}}></Card>
                    <Grid className={classes.grid} item xs={12} sm={12} md={12}  key={x.id}>
                        <Card className={darkMode?classes.darkMode:classes.lightMode}>
                            <div className={darkMode?classes.darktop:classes.top}>
                                <p className={darkMode?classes.darktitle:classes.title}>{x.title}</p>
                                <p className={darkMode?classes.darkdate:classes.date}>Date: {x.date}</p>
                            </div>
                            <p className={darkMode?classes.darkdescription:classes.description}>{x.description}</p>
                            <div className={classes.googleDots}>
                                <span className={classes.dot1}></span>
                                <span className={classes.dot2}></span>
                                <span className={classes.dot3}></span>
                                <span className={classes.dot4}></span>
                            </div>
                        </Card>
                    </Grid>
                </div>
            ))}
        </div>
    )
}