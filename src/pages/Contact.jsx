import React, { useState , useContext} from 'react';

import { ThemeContext } from "../ThemeContext";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import yellowCircle from '../assets/images/yellowCircle.svg';
import greenCircle from '../assets/images/greenCircle.svg';
import blueCircle from '../assets/images/blueCircle.png';
import blueCircleHalfdark from '../assets/images/blueCircleHalfdark.jpg';
import blueCircleHalf from '../assets/images/blueCircleHalf.png';
import redCircle from '../assets/images/redCircle.svg';
import redCircleHalfdark from '../assets/images/redCircledark.jpg';
import redCircleHalf from '../assets/images/redCircle.png';
import Contactpagedark from '../assets/images/Contactpagedark.gif';
import Contactpage from '../assets/images/Contactpage.gif';
import blueRect from '../assets/images/blueRect.svg';
import yellowRect from '../assets/images/yellowRect.svg';
import greenRect from '../assets/images/greenRect.svg';
import halfcircledark from '../assets/images/greenhalfcircledark.jpg';
import halfcircle from '../assets/images/greenhalfcircle.png';
import yellowCircleHalfdark from '../assets/images/yellowCircleHalfdark.jpg';
import yellowCircleHalf from '../assets/images/yellowCircleHalf.png';
import rgbyCircle from '../assets/images/rgbyCircle.svg';
import rgby2dark from '../assets/images/rgby2darkk.png';
import rgby2 from '../assets/images/rgby2.png';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { TextField, makeStyles, Button ,useMediaQuery,useTheme , Grid} from '@material-ui/core';

var service_id = process.env.REACT_APP_SERVICE_ID;
var template_id = process.env.REACT_APP_TEMPLATE_ID;
var user = process.env.REACT_APP_ACCESS_TOKEN;
var user_id = process.env.REACT_APP_USERID;
var redRect = require('../assets/images/redRect.svg');
const useStyles = makeStyles({


	mainContainer: {
		display: 'grid',
		justifyContent: 'center',
		position: 'relative',
		zIndex: 5,
	},
	formContainer: {
		position: 'relative',
		width: '23rem',
		height: 'auto',
		justifyContent: 'center',
		padding: '10px',
		paddingTop:"5px"
	},
	inputbox: {
		marginBottom: '1rem',
		borderColor: '#4385F3',
	},
	mobilebox: {
		marginBottom: '1rem',
		width: '15rem',
		borderColor: 'blue',
	},
	inputboxdark: {
		"&.MuiFormControl-root":{
			backgroundColor: "#ecf0f1"
		},
		marginBottom: '1rem',
		color: 'yellow',
	},
	mobileboxdark: {
		"&.MuiFormControl-root":{
			backgroundColor: "#ecf0f1"
		},
		marginBottom: '1rem',
		width: '15rem',
		borderColor: 'blue',
	},
	signbtn: {
		width: '100%',
		height: '2.5rem',
		background: '#95a6fe',
		color: 'black',
		fontSize: '1.1rem',
	},
	disablesignbtn: {
		background: 'rgb(149, 166, 254, 0.5)',
		width: '100%',
		height: '2.5rem',
		color: 'black',
		fontSize: '1.1rem',
	},
	box: {
		width: '1180px',
		height: '820',
		marginLeft: '10px',
		marginRight: '10px',
	},
	blue2: {
		position: 'absolute',
		top: '57vh',
		left: '40%',
		width: '10px',
		height: '10px',
		opacity: '60%',
		overflow: 'hidden',
	},
	red1: {
		position: 'absolute',
		top: '61vh',
		left: '42px',
		width: '15px',
		height: '15px',
		opacity: '50%',
	},
	red2: {
		position: 'absolute',
		top: '40vh',
		left: '9%',
		width: '18px',
		height: '18px',
		opacity: '60%',
	},
	green1: {
		position: 'absolute',
		top: '80vh',
		left: '75%',
		width: '17px',
		height: '17px',
		opacity: '60%',
	},
	blue1: {
		position: 'absolute',
		top: '38vh',
		left: '80%',
		width: '30px',
		height: '30px',
		opacity: '50%',
	},
	yellowR1: {
		position: 'absolute',
		top: '38vh',
		left: '50%',
		width: '18px',
		height: '18px',
		opacity: '50%',
	},
	yellowR2: {
		position: 'absolute',
		top: '95vh',
		left: '7.5%',
		width: '15px',
		height: '15px',
		opacity: '30%',
	},
	yellowR3: {
		position: 'absolute',
		top: '100vh',
		left: '65%',
		width: '15px',
		height: '15px',
		opacity: '30%',
	},
	blueR: {
		position: 'absolute',
		top: '74vh',
		left: '46%',
		width: '19px',
		height: '19px',
		opacity: '30%',
	},
	greenR: {
		position: 'absolute',
		top: '52vh',
		left: '85%',
		width: '20px',
		height: '20px',
		opacity: '30%',
	},
	red3: {
		position: 'absolute',
		top: '103vh',
		left: '55%',
		width: '30px',
		height: '30px',
		opacity: '60%',
	},
	redRect1: {
		position: 'absolute',
		marginTop: '775px',
		left: '20%',
		width: '25px',
		height: '25px',
		opacity: '80%',
	},
	rgby2: {
		position: 'absolute',
		marginTop:"130vh",
		left: '75%',
		width: '105px',
		height: '105px',
		overflow:"hidden",
		borderRadius:"30%",
		borderTopLeftRadius:"50%",
		
	},
	blue1d: {
		position: 'absolute',
		marginTop: '180px',
		left: '85%',
		width: '25px',
		height: '25px',
		opacity: '50%',
		border: '2rem',
		borderColor: 'black',
	},
	blue2d: {
		position: 'absolute',
		marginTop: '720px',
		left: '55%',
		width: '25px',
		height: '25px',
		opacity: '50%',
	},
	blue3d: {
		position: 'absolute',
		marginTop: '750px',
		left: '77%',
		width: '25px',
		height: '25px',
		opacity: '50%',
	},
	blue4d: {
		position: 'absolute',
		marginTop: '80px',
		left: '13%',
		width: '25px',
		height: '25px',
		opacity: '40%',
	},
	blue5d: {
		position: 'absolute',
		marginTop: '710px',
		left: '17%',
		width: '20px',
		height: '20px',
		opacity: '40%',
	},
	blue6d: {
		position: 'absolute',
		top: '100%',
		left: '12%',
		width: '20px',
		height: '20px',
		opacity: '40%',
	},
	blue7d: {
		position: 'absolute',
		marginTop: '120%',
		left: '12%',
		width: '12px',
		height: '12px',
		opacity: '40%',
	},
	blue8d: {
		position: 'absolute',
		marginTop: '220px',
		left: '47%',
		width: '10px',
		height: '10px',
		opacity: '50%',
	},
	blue9d: {
		position: 'absolute',
		marginTop: '380px',
		left: '35%',
		width: '12px',
		height: '12px',
		opacity: '40%',
	},
	blue10d: {
		position: 'absolute',
		marginTop: '750px',
		left: '22%',
		width: '10px',
		height: '10px',
		opacity: '40%',
	},
	blue11d: {
		position: 'absolute',
		marginTop: '720px',
		left: '28%',
		width: '10px',
		height: '10px',
		opacity: '40%',
	},
	blue12d: {
		position: 'absolute',
		marginTop: '690px',
		left: '34%',
		width: '10px',
		height: '10px',
		opacity: '40%',
	},
	green1d: {
		position: 'absolute',
		marginTop: '620px',
		left: '87%',
		width: '25px',
		height: '25px',
		opacity:"60%"
	},
	green2d: {
		position: 'absolute',
		marginTop: '650px',
		left: '84%',
		width: '10px',
		height: '10px',
		opacity:"60%"
	},
	green3d: {
		position: 'absolute',
		marginTop: '700px',
		left: '80%',
		width: '10px',
		height: '10px',
		opacity:"60%"
	},
	green4d: {
		position: 'absolute',
		top: '142%',
		left: '34%',
		width: '10px',
		height: '10px',
		opacity: '40%',
	},
	green5d: {
		position: 'absolute',
		marginTop: '200px',
		left: '42%',
		width: '15px',
		height: '15px',
		opacity: '40%',
	},
	yellow1d: {
		position: 'absolute',
		marginTop: '120px',
		left: '55%',
		width: '10px',
		height: '10px',
		opacity: '40%',
	},
	yellow2d: {
		position: 'absolute',
		marginTop: '250px',
		left: '38%',
		width: '15px',
		height: '15px',
		opacity: '40%',
	},
	yellow3d: {
		position: 'absolute',
		marginTop: '150px',
		left: '35%',
		width: '10px',
		height: '10px',
		opacity: '40%',
	},
	yellow4d: {
		position: 'absolute',
		marginTop: '410px',
		left: '58%',
		width: '22px',
		height: '22px',
		opacity: '40%',
	},
	yellow5d: {
		position: 'absolute',
		marginTop: '770px',
		left: '38%',
		width: '25px',
		height: '25px',
		opacity: '60%',
	},
	yellow6d: {
		position: 'absolute',
		marginTop: '720px',
		left: '72%',
		width: '15px',
		height: '15px',
		opacity: '40%',
	},
	yellow7d: {
		position: 'absolute',
		marginTop: '600px',
		left: '81%',
		width: '20px',
		height: '20px',
		opacity: '40%',
	},
	rgbyCircle1: {
		position: 'absolute',
		marginTop: '750px',
		left: '84%',
		width: '160px',
		height: '160px',
	},
});

export const Contact = () => {
	const {darkMode} = useContext(ThemeContext) ; 
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	let [errors, setErrors] = useState({
		fnerror: '',
		mesgerror: '',
		emailerror: '',
	});
	let [value, setValue] = useState({
		firstname: '',
		message: '',
		email: '',
	});

	const handleChanges = event => {
		setValue({
			...value,
			[event.target.name]: event.target.value,
		});
	};
	const blur = e => {
		let { name } = e.target;
		validateField(name);
	};

	const validateField = name => {
		let isValid = false;

		if (name === 'firstname') isValid = validateFirstName();
		else if (name === 'message') isValid = validateMessage();
		else if (name === 'email') isValid = validateEmailAddress();
		return isValid;
	};
	const validateFirstName = () => {
		let fnerror = '';
		const valid = /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/;
		let fname = value.firstname;
		if (fname.trim() === '') fnerror = 'First Name is required';
		else if (!valid.test(fname)) fnerror = 'Name is not valid';
		setErrors({
			...errors,
			fnerror: fnerror,
		});
	};
	const validateEmailAddress = () => {
		let emailerror = '';
		const valid =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let email = value.email;
		if (email.trim() === '') emailerror = 'Email address is required';
		else if (!valid.test(email)) emailerror = 'Email address is not valid';
		setErrors({
			...errors,
			emailerror: emailerror,
		});
	};
	const validateMessage = () => {
		let mesgerror = '';
		const valid = /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/;
		let msgname = value.message;
		if (msgname.trim() === '') mesgerror = 'Message is required';
		else if (!valid.test(msgname)) mesgerror = 'Message is not valid';
		setErrors({
			...errors,
			mesgerror: mesgerror,
		});
	};
	const classes = useStyles();

	const onsubmit = () => {
		console.log(value.message);
		console.log(value.firstname);
		console.log(value.email);
		let templateParams = {
			from_name: value.firstname,
			from_email: value.email,
			message: value.message,
		};
		emailjs.init(user);
		emailjs.send(service_id, template_id, templateParams, user_id).then(res => console.log(res));
	};
	return (
		<div className="mainbody" >
			<div className= {darkMode ? "header-conatct font-semibold text-white" : "header-conatct font-semibold" } style={{fontSize:"40px" , marginTop:"5vh" , marginBottom:"2vh" ,textAlign:"center"}}>Contact Us</div>
			<div className={darkMode ? "sub-header-dark" : "sub-header" }>Any Questions or Remarks? Just write us a Question</div>
			
			
			<div className="images-phone w-0">
				<div className="yellow">
				{darkMode ? (<img src={yellowCircleHalfdark} alt=""/>): (<img src={yellowCircleHalf} alt="" />)  }
					
				</div>
				<div className="green">
					{darkMode ? (<img src={halfcircledark} alt=""/>): (<img src={halfcircle} alt="" />)  }
				</div>
				<div className="blue">
				{darkMode ? (<img src={blueCircleHalfdark} alt=""/>): (<img src={blueCircleHalf} alt="" />)  }
					<img  alt="" />
				</div>
				<div className="red">
				{darkMode ? (<img src={redCircleHalfdark} alt=""/>): (<img src={redCircleHalf} alt="" />)  }
				</div>
				<div className="yellow1">
					<img src={yellowCircle} alt="" />
				</div>
				<div className={classes.green1}>
					<div className="floatgreen1">
					<img src={greenCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue1}>
					<div className="floatblue1">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.red1}>
					<div className="floatred1">
					<img src={redCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue2}>
					<div className="floatblue2">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.red2}>
					<div className="floatred2">
					<img src={redCircle} alt="" />
					</div>
				</div>
				<div className={classes.red3}>
					<div className="floatred3">
					<img src={redCircle} alt="" />
					</div>
				</div>
				<div className={classes.yellowR1}>
					<div className="floatyellowR1">
					<img src={yellowRect} alt="" />
					</div>
				</div>
				<div className={classes.yellowR2}>
					<div className="floatyellowR2">
					<img src={yellowRect} alt="" />
					</div>
				</div>
				<div className={classes.yellowR3}>
					<div className="floatyellowR3">
					<img src={yellowRect} alt="" />
					</div>
				</div>
				<div className={classes.blueR}>
					<div className="floatblueR">
					<img src={blueRect} alt="" />
					</div>
				</div>
				<div className={classes.greenR}>
					<div className="floatgreenR">
					<img src={greenRect} alt="" />
					</div>
				</div>
				<div class={classes.rgby2}>
					{darkMode ? <img src={rgby2dark} alt =" " /> :<img src={rgby2} alt="" /> }
				</div>
			</div>

			<div className="images-desktop">
				<div className="greenR-d">
					<img src={greenRect} alt="" />
				</div>
				<div className="blueR-d">
					<img src={blueRect.default} alt="" />
				</div>
				<div className={classes.redRect1}>
					<img src={redRect.default} alt="" />
				</div>
				<div className="yellowR-d">
					<div className="floatyellowR-d">
					<img src={yellowRect} alt="" />
					</div>
				</div>
				<div className={classes.blue1d}>
					<div className="floatblue1d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue2d}>
					<div className="floatblue2d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue3d}>
					<div className="floatblue3d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue4d}>
					<div className="floatblue4d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue5d}>
					<div className="floatblue5d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue6d}>
					<div className="floatblue6d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue7d}>
					<div className="floatblue7d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue8d}>
					<div className="floatblue8d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue9d}>
					<div className="floatblue9d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue10d}>
					<div className="floatblue10d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue11d}>
					<div className="floatblue11d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.blue12d}>
					<div className="floatblue12d">
					<img src={blueCircle} alt="" />
					</div>
				</div>
				<div className={classes.green1d}>
				<div class="floatgreen1d">
					<img src={greenCircle} alt="" />
				</div>
				</div>
				<div className={classes.green2d}>
					<div className="floatgreen2d">
					<img src={greenCircle} alt="" />
					</div>
				</div>
				<div className={classes.green3d}>
					<div className="floatgreen3d">
					<img src={greenCircle} alt="" />
					</div>
				</div>
				<div className={classes.green5d}>
					<div className="floatgreen5d">
					<img src={greenCircle} alt="" />
					</div>
				</div>
				<div className={classes.yellow1d}>
					<div className="floatyellow1d">
					<img src={yellowCircle} alt="" />
					</div>
				</div>
				<div className={classes.yellow2d}>
					<div className="floatyellow2d">
					<img src={yellowCircle} alt="" />
					</div>
				</div>
				<div className={classes.yellow3d}>
					<div className="floatyellow3d">
					<img src={yellowCircle} alt="" />
					</div>
				</div>
				<div className={classes.yellow4d}>
					<div className="floatyellow4d">
					<img src={yellowCircle} alt="" />
					</div>
				</div>
				<div className={classes.yellow5d}>
					<div className="floatyellow5d">
					<img src={yellowCircle} alt="" />
					</div>
				</div>
				<div className={classes.yellow6d}>
					<img src={yellowCircle} alt="" />
				</div>
				<div className={classes.yellow7d}>
					<img src={yellowCircle} alt="" />
				</div>
				<div className="circle">
					<div className={classes.rgbyCircle1}>
						<div className="circle1">
						<img src={rgbyCircle} alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className={darkMode ? "box-dark" : "box" }>
				<div className="box-primary">
					<div class="inner-Box mb-4 mt-8 ml-20">
						<Grid container>
						<div className="talk">
						<div className={darkMode ? "head text-3xl mb-14 font-bold text-white" : "head text-3xl mb-14 font-bold" }>Let's Talk</div>
						</div>
						<Grid item xs={12}>
						<TextField
						className={darkMode ? classes.inputboxdark : classes.inputbox}
						autoFocus="1"
						fullWidth
						label="Your Name"
						name="firstname"
						onChange={handleChanges}
						value={value.firstname}
						type="text"
						variant="filled"
						autoComplete="off"
						onBlur={blur}
						/>
						{/*{isMobile ?
						<TextField
							className={darkMode ? classes.mobileboxdark : classes.mobilebox}
							autoFocus="1"
							label="Your Name"
							name="firstname"
							onChange={handleChanges}
							value={value.firstname}
							type="text"
							variant="filled"
							autoComplete="off"
							onBlur={blur}
						/>
						: <TextField
						className={darkMode ? classes.inputboxdark : classes.inputbox}
						autoFocus="1"
						label="Your Name"
						name="firstname"
						onChange={handleChanges}
						value={value.firstname}
						type="text"
						variant="filled"
						autoComplete="off"
						onBlur={blur}
						/>}*/}
						<div
							style={{
								marginTop: '-15px',
								paddingBottom: '15px',
								color: 'red',
								fontSize: '0.9rem',
								marginBottom: '3rem',
							}}
						>
							{errors.fnerror}
						</div>
						</Grid>
						<Grid item xs={12}>
						<div className="message-box">
							<TextField
							className={darkMode ? classes.inputboxdark : classes.inputbox}
							label="Your Email"
							name="email"
							fullWidth
							onChange={handleChanges}
							value={value.email}
							type="email"
							variant="filled"
							autoComplete="off"
							onBlur={blur}
						/>		
						</div>
						<div
							style={{
								marginTop: '2px',
								color: 'red',
								fontSize: '0.9rem',
								marginBottom: '3rem',
							}}
						>
							{errors.emailerror}
						</div>
						</Grid>
						<Grid item xs={12}>
						<div className="message-box">
							<TextField
							className={darkMode ? classes.inputboxdark : classes.inputbox}
							label="Your Message"
							name="message"
							onChange={handleChanges}
							value={value.message}
							fullWidth
							type="text"
							variant="filled"
							autoComplete="off"
							onBlur={blur}
						/>
							
						</div>
						<div
							style={{
								marginTop: '2px',
								//paddingBottom: '2px',
								color: 'red',
								fontSize: '0.9rem',
								marginBottom: '3rem',
							}}
						>
							{errors.mesgerror}
						</div>
						</Grid>
						<Button
							className="submit"
							variant="contained"
							endIcon={<SendIcon />}
							style={{
								width: '12rem',
								height: '2.5rem',
								fontSize: '1.5rem',
								marginBottom:"4vh",
								marginTop:"-2vh",
								backgroundColor: 'rgba(67, 133, 243, 1)',
								color: 'white',
							}}
							onClick={onsubmit}
						>
							Submit
						</Button>
					</Grid>
					</div>
				</div>
				<div className="box-secondary">
					<div className="box-image">
						{darkMode ? 
							<img
							style={{
								height: '700px',
								marginTop: '-120px',
								marginLeft: '-50px',
							}}
							src={Contactpagedark}
							alt=""
						/> : <img
						style={{
							height: '700px',
							marginTop: '-120px',
							marginLeft: '-50px',
						}}
						src={Contactpage}
						alt=""
					/> }
					</div>
					<div className={darkMode ? "box-detail h-56 mr-14 w-11/12 text-white" : "box-detail h-56 mr-14 w-11/12 "}>
						<div className="box-address">
							<div class="h-28 w-28 p-7 ml-5">
								<FontAwesomeIcon icon={faMapMarkerAlt} color="rgba(16, 157, 88, 1)" size="2x" />
							</div>
							<div className="detail h-28 text-lg font-semibold  py-3">
								No. U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Rd, Opp.Cooper Hospital, Vile Parle,
								Mumbai, Maharashtra 400056{' '}
							</div>
						</div>
						{/* <div className="box-address">
							<div class="h-28 w-28 p-7 ml-5">
								<FontAwesomeIcon icon={faPhoneAlt} color="rgba(16, 157, 88, 1)" size="2x" />
							</div>
							<div className="detail h-28 text-lg w-200 pl-3 p-6 font-semibold">+91 939282927</div>
						</div> */}
						<Grid container>
						<Grid item xs={12}>
						<div class="box-map">
							<div>
								<iframe
									scrolling="no"
									marginheight="0"
									marginwidth="0"
									title="DJ Sanghavi College"
									src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dwarkadas%20J.Sanghavi%20+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
									height="600"
									frameborder="0"
									width="100%"
								>
									<a href="https://www.mapsdirections.info/en/measure-map-radius/">
										Map radius measure
									</a>
								</iframe>
							</div>
						</div>
						</Grid>
						</Grid>
						<div class="box-social ml-28 ">
						{darkMode ? 
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADnUlEQVRoge2ZT4gbZRjGf+/sqqBtvYgHraJIPaigFO1N24pCERUU1J2ZrD3sQZtkbaUeioosVPFQWGtNthVND20m2V2P/ivowdKLYK2XLohtBVkUEUHp2rKbbub1kA1OspnJfLMT00N+x/dlnnmezHx87zeBAQMGDOgnEtU8XK3e4dd1P8IO4KZAaxGYAz2cdZyjIqI9dRlBaIAPjh270xoa/ha4OUpAYTLvOntTdxYTK7QxNLyfLuYBBF49Ui7fk6orA0IDAI/G1JA61pNpmElCVIDYiLApDZ0kRAX41UDntrUaSUpEAIkdQJXb0zCThIgA/s+xVeSqfAJ8b6Cz7sPZ2RvXaiYJoQHE908b6OhSrdaXzSw0wB8XLpwD/ownoz+8kslcTMmTEaEBJiYmfEG/jKGx7PvW1bcTr/Bpl35dVHaOj9rfpGXIlMgA1y0ungAuhbSXBbWzGbuSvq34RAYYGxtbAJnu0KqLys6s637SI1+x6TpK+BZHVldlX79/+SZdA4zb9mmEU61V7dvw1k6sYc6vy1ttpa2FcvWZHvgxJvJEFqToVb4CHguUfhP0vqzr/pW+rfjEHqdV2KNQC5RuUZVDPfBkROwAeceZE+VAS1HITJWrL6fuygCjA831V5beBuaCNV/0/anj1YdTdWVA7DXQpDA9fbfU/e+ADYHyRfWt7fnRkTPpWYuH8ZEyPzLyk6IvAcHpc4NY/heHjk/fb6pXKpXWl0ql9abXNTF+Ak0Knve6IO+0lf8WX57OjtqnOl4UoOh520EmgQdWSpcUfrFgHpgHPS/1oc93vThyNkoncYCGicpBYHewplCzVHZnM3aHHbxBoVJ5XhQPGO52D4XJnGO/FvbxbE0BVFWmKtX3aAuxgifoePs+YWL+v/vIWD5jH+3UW9NnFRHRnOvsUfQNWtcEgKvI2aLnPdssTHnec6bmG/fRXaE9I8cRFMvVFxD9COi0IE+CfAb6LobmG+jlnOve0KmTyoctgFzGnvGFLQidFt1W0AMkMg8g14R1UgsAMO44Pw4vLGwWdB+wlKZ2GKm9Qu0UKpV7RTlI6wCYlCs517m2UyPVJxAk7zhzOdd5XIRtq88TxoROvD0L0CTrOCdzjvOIb8lDAh8D/ySQORHW6NkrFEZxdnYdtfoORJ8CnqD1n5/VKL8zJFtytj3fqf2/BwiiqlKcmdlkLeuDaulmlLtAbwXZSGNf+RpL3gwzP2DAgAH9518IwRIJe+OBSwAAAABJRU5ErkJggg==" alt="" />
						: <img src="https://img.icons8.com/material-rounded/48/000000/phone--v1.png" alt="" />
						}	
							<a href="mailto:gdsc.djsce@gmail.com">
							{darkMode ? 
							<img src="data:image/png;base64,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"/>
							:<img src="https://img.icons8.com/ios-filled/48/000000/gmail-new.png" alt="" />
							}
							</a>
							<a href="https://www.linkedin.com/company/gdsc-djsce/">
								{darkMode ?
								<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzk1YTVhNiI+PHBhdGggZD0iTTEzNi4xNjY2NywyMS41aC0xMDAuMzMzMzNjLTcuOTE5MTcsMCAtMTQuMzMzMzMsNi40MTQxNyAtMTQuMzMzMzMsMTQuMzMzMzN2MTAwLjMzMzMzYzAsNy45MTkxNyA2LjQxNDE3LDE0LjMzMzMzIDE0LjMzMzMzLDE0LjMzMzMzaDEwMC4zMzMzM2M3LjkxOTE3LDAgMTQuMzMzMzMsLTYuNDE0MTcgMTQuMzMzMzMsLTE0LjMzMzMzdi0xMDAuMzMzMzNjMCwtNy45MTkxNyAtNi40MTQxNywtMTQuMzMzMzMgLTE0LjMzMzMzLC0xNC4zMzMzM3pNNTUuNDU1NjcsMTIxLjgzMzMzdjBjLTQuOTk1MTcsMCAtOS4wNDQzMywtNC4wNDkxNyAtOS4wNDQzMywtOS4wNDQzM3YtMzIuMDg1MTdjMC4wMDcxNywtNC45ODggNC4wNTYzMywtOS4wMzcxNyA5LjA0NDMzLC05LjAzNzE3djBjNC45OTUxNywwIDkuMDQ0MzMsNC4wNDkxNyA5LjA0NDMzLDkuMDQ0MzN2MzIuMDg1MTdjMCw0Ljk4OCAtNC4wNDkxNyw5LjAzNzE3IC05LjA0NDMzLDkuMDM3MTd6TTU1LjE0MDMzLDYyLjQ3MTgzYy01LjUyNTUsMCAtOS4yMTYzMywtMy42ODM2NyAtOS4yMTYzMywtOC42YzAsLTQuOTE2MzMgMy42ODM2NywtOC42IDkuODI1NSwtOC42YzUuNTI1NSwwIDkuMjE2MzMsMy42ODM2NyA5LjIxNjMzLDguNmMwLDQuOTE2MzMgLTMuNjgzNjcsOC42IC05LjgyNTUsOC42ek0xMjAuMjQ5NSwxMjEuODMzMzN2MGMtNC44MzAzMywwIC04Ljc1MDUsLTMuOTIwMTcgLTguNzUwNSwtOC43NTA1di0xOC42NjkxN2MwLC03LjU4MjMzIC00LjY2NTUsLTguNDEzNjcgLTYuNDE0MTcsLTguNDEzNjdjLTEuNzQ4NjcsMCAtNy41ODIzMywwLjI1MDgzIC03LjU4MjMzLDguNDEzNjd2MTguNjY5MTdjMCw0LjgzMDMzIC0zLjkyMDE3LDguNzUwNSAtOC43NTA1LDguNzUwNWgtMC41ODA1Yy00LjgzMDMzLDAgLTguNzUwNSwtMy45MjAxNyAtOC43NTA1LC04Ljc1MDV2LTMyLjM3MTgzYzAsLTQuOTk1MTcgNC4wNDkxNywtOS4wNDQzMyA5LjA0NDMzLC05LjA0NDMzdjBjNC45OTUxNywwIDkuMDQ0MzMsNC4wNDkxNyA5LjA0NDMzLDkuMDQ0MzNjMCwwIDIuMDIxLC05LjA0NDMzIDE1Ljc1MjMzLC05LjA0NDMzYzguNzM2MTcsMCAxNS43MzgsNy4wMDE4MyAxNS43MzgsMjIuNzQ3djE4LjY2OTE3YzAsNC44MzAzMyAtMy45MjAxNyw4Ljc1MDUgLTguNzUwNSw4Ljc1MDV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
								: <img src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png" alt="" />}
							</a>
							<a href="https://www.instagram.com/gdsc.djsce/">
							{darkMode ? 
							<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzk1YTVhNiI+PHBhdGggZD0iTTU3LjMzMzMzLDIxLjVjLTE5Ljc4NzE3LDAgLTM1LjgzMzMzLDE2LjA0NjE3IC0zNS44MzMzMywzNS44MzMzM3Y1Ny4zMzMzM2MwLDE5Ljc4NzE3IDE2LjA0NjE3LDM1LjgzMzMzIDM1LjgzMzMzLDM1LjgzMzMzaDU3LjMzMzMzYzE5Ljc4NzE3LDAgMzUuODMzMzMsLTE2LjA0NjE3IDM1LjgzMzMzLC0zNS44MzMzM3YtNTcuMzMzMzNjMCwtMTkuNzg3MTcgLTE2LjA0NjE3LC0zNS44MzMzMyAtMzUuODMzMzMsLTM1LjgzMzMzek0xMjksMzUuODMzMzNjMy45NTYsMCA3LjE2NjY3LDMuMjEwNjcgNy4xNjY2Nyw3LjE2NjY3YzAsMy45NTYgLTMuMjEwNjcsNy4xNjY2NyAtNy4xNjY2Nyw3LjE2NjY3Yy0zLjk1NiwwIC03LjE2NjY3LC0zLjIxMDY3IC03LjE2NjY3LC03LjE2NjY3YzAsLTMuOTU2IDMuMjEwNjcsLTcuMTY2NjcgNy4xNjY2NywtNy4xNjY2N3pNODYsNTAuMTY2NjdjMTkuNzg3MTcsMCAzNS44MzMzMywxNi4wNDYxNyAzNS44MzMzMywzNS44MzMzM2MwLDE5Ljc4NzE3IC0xNi4wNDYxNywzNS44MzMzMyAtMzUuODMzMzMsMzUuODMzMzNjLTE5Ljc4NzE3LDAgLTM1LjgzMzMzLC0xNi4wNDYxNyAtMzUuODMzMzMsLTM1LjgzMzMzYzAsLTE5Ljc4NzE3IDE2LjA0NjE3LC0zNS44MzMzMyAzNS44MzMzMywtMzUuODMzMzN6TTg2LDY0LjVjLTExLjg3NDEyLDAgLTIxLjUsOS42MjU4OCAtMjEuNSwyMS41YzAsMTEuODc0MTIgOS42MjU4OCwyMS41IDIxLjUsMjEuNWMxMS44NzQxMiwwIDIxLjUsLTkuNjI1ODggMjEuNSwtMjEuNWMwLC0xMS44NzQxMiAtOS42MjU4OCwtMjEuNSAtMjEuNSwtMjEuNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
							: <img src="https://img.icons8.com/material-rounded/48/000000/instagram-new.png" alt="" />}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
