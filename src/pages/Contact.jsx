import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import yellowCircle from '../assets/images/yellowCircle.svg';
import greenCircle from '../assets/images/greenCircle.svg';
import blueCircle from '../assets/images/blueCircle.png';
import blueCircleHalf from '../assets/images/blueCircleHalf.jpg';
import redCircle from '../assets/images/redCircle.svg';
import redCircleHalf from '../assets/images/redCircle.jpg';
import Contactpage from '../assets/images/Contactpage.gif';
import blueRect from '../assets/images/blueRect.svg';
import yellowRect from '../assets/images/yellowRect.svg';
import greenRect from '../assets/images/greenRect.svg';
import halfcircle from '../assets/images/halfcircle.svg';
import yellowCircleHalf from '../assets/images/yellowCircleHalf.jpg';
import rgbyCircle from '../assets/images/rgbyCircle.svg';
import rgby2 from '../assets/images/rgby2.svg';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { TextField, makeStyles, Button } from '@material-ui/core';

var service_id = process.env.REACT_APP_SERVICE_ID;
var template_id = process.env.REACT_APP_TEMPLATE_ID;
var user = process.env.REACT_APP_ACCESS_TOKEN;
var user_id = process.env.REACT_APP_USERID;
var redRect = require('../assets/images/redRect.svg');
const useStyles = makeStyles({
	root: {
		'& .MuiOutlinedInput-root': {
			width: '19rem',
			height: '100px',
		},
	},
	root1: {
		'& .MuiOutlinedInput-root': {
			width: '19rem',
		},
	},

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
	},
	inputbox: {
		marginBottom: '1rem',
		width: '17rem',
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
		top: '60%',
		left: '40%',
		width: '10px',
		height: '10px',
		opacity: '60%',
		overflow: 'hidden',
	},
	red1: {
		position: 'absolute',
		top: '67%',
		left: '42px',
		width: '15px',
		height: '15px',
		opacity: '50%',
	},
	red2: {
		position: 'absolute',
		top: '42%',
		left: '9%',
		width: '18px',
		height: '18px',
		opacity: '60%',
	},
	green1: {
		position: 'absolute',
		top: '84%',
		left: '75%',
		width: '17px',
		height: '17px',
		opacity: '60%',
	},
	blue1: {
		position: 'absolute',
		top: '40%',
		left: '80%',
		width: '30px',
		height: '30px',
		opacity: '50%',
	},
	yellowR1: {
		position: 'absolute',
		top: '40%',
		left: '50%',
		width: '18px',
		height: '18px',
		opacity: '50%',
	},
	yellowR2: {
		position: 'absolute',
		top: '97%',
		left: '7.5%',
		width: '15px',
		height: '15px',
		opacity: '30%',
	},
	yellowR3: {
		position: 'absolute',
		top: '103%',
		left: '65%',
		width: '15px',
		height: '15px',
		opacity: '30%',
	},
	blueR: {
		position: 'absolute',
		top: '78%',
		left: '46%',
		width: '19px',
		height: '19px',
		opacity: '30%',
	},
	greenR: {
		position: 'absolute',
		top: '54%',
		left: '85%',
		width: '20px',
		height: '20px',
		opacity: '30%',
	},
	red3: {
		position: 'absolute',
		top: '110%',
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
		marginTop: '1002px',
		left: '75%',
		width: '105px',
		height: '105px',
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
		left: '80%',
		width: '25px',
		height: '25px',
		opacity: '50%',
	},
	blue4d: {
		position: 'absolute',
		marginTop: '80px',
		left: '6%',
		width: '25px',
		height: '25px',
		opacity: '40%',
	},
	blue5d: {
		position: 'absolute',
		marginTop: '710px',
		left: '10%',
		width: '20px',
		height: '20px',
		opacity: '40%',
	},
	blue6d: {
		position: 'absolute',
		top: '120%',
		left: '5%',
		width: '20px',
		height: '20px',
		opacity: '40%',
	},
	blue7d: {
		position: 'absolute',
		marginTop: '255px',
		left: '5%',
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
		marginTop: '600px',
		left: '92%',
		width: '25px',
		height: '25px',
		opacity: '40%',
	},
	green2d: {
		position: 'absolute',
		marginTop: '650px',
		left: '88%',
		width: '10px',
		height: '10px',
		opacity: '40%',
	},
	green3d: {
		position: 'absolute',
		marginTop: '700px',
		left: '85%',
		width: '10px',
		height: '10px',
		opacity: '40%',
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
		opacity: '40%',
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
		marginTop: '720px',
		left: '87%',
		width: '160px',
		height: '160px',
	},
});

export const Contact = () => {
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
		<div>
			<div class="header font-bold">Contact Us</div>
			<div className="sub-header">Any Questions or Remarks? Just write us a Question</div>
			<div className="images-phone w-0">
				<div className="yellow">
					<img src={yellowCircleHalf} alt="" />
				</div>
				<div className="green">
					<img src={halfcircle} alt="" />
				</div>
				<div className="blue">
					<img src={blueCircleHalf} alt="" />
				</div>
				<div className="red">
					<img src={redCircleHalf} alt="" />
				</div>
				<div className="yellow1">
					<img src={yellowCircle} alt="" />
				</div>
				<div className={classes.green1}>
					<img src={greenCircle} alt="" />
				</div>
				<div className={classes.blue1}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.red1}>
					<img src={redCircle} alt="" />
				</div>
				<div className={classes.blue2}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.red2}>
					<img src={redCircle} alt="" />
				</div>
				<div className={classes.red3}>
					<img src={redCircle} alt="" />
				</div>
				<div className={classes.yellowR1}>
					<img src={yellowRect} alt="" />
				</div>
				<div className={classes.yellowR2}>
					<img src={yellowRect} alt="" />
				</div>
				<div className={classes.yellowR3}>
					<img src={yellowRect} alt="" />
				</div>
				<div className={classes.blueR}>
					<img src={blueRect} alt="" />
				</div>
				<div className={classes.greenR}>
					<img src={greenRect} alt="" />
				</div>
				<div class={classes.rgby2}>
					<img src={rgby2} alt="" />
				</div>
			</div>

			<div className="images-desktop">
				<div class="greenR-d">
					<img src={greenRect} alt="" />
				</div>
				<div className="blueR-d">
					<img src={blueRect.default} alt="" />
				</div>
				<div className={classes.redRect1}>
					<img src={redRect.default} alt="" />
				</div>
				<div className="yellowR-d">
					<img src={yellowRect} alt="" />
				</div>
				<div className={classes.blue1d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue2d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue3d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue4d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue5d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue6d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue7d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue8d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue9d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue10d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue11d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.blue12d}>
					<img src={blueCircle} alt="" />
				</div>
				<div className={classes.green1d}>
					<img src={greenCircle} alt="" />
				</div>
				<div className={classes.green2d}>
					<img src={greenCircle} alt="" />
				</div>
				<div className={classes.green3d}>
					<img src={greenCircle} alt="" />
				</div>
				<div className={classes.green5d}>
					<img src={greenCircle} alt="" />
				</div>
				<div className={classes.yellow1d}>
					<img src={yellowCircle} alt="" />
				</div>
				<div className={classes.yellow2d}>
					<img src={yellowCircle} alt="" />
				</div>
				<div className={classes.yellow3d}>
					<img src={yellowCircle} alt="" />
				</div>
				<div className={classes.yellow4d}>
					<img src={yellowCircle} alt="" />
				</div>
				<div className={classes.yellow5d}>
					<img src={yellowCircle} alt="" />
				</div>
				<div className={classes.yellow6d}>
					<img src={yellowCircle} alt="" />
				</div>
				<div className={classes.yellow7d}>
					<img src={yellowCircle} alt="" />
				</div>
				<div className="circle">
					<div className={classes.rgbyCircle1}>
						<img src={rgbyCircle} alt="" />
					</div>
				</div>
			</div>

			<div class="box shadow">
				<div className="box-primary">
					<div class="inner-Box mb-4 mt-8 ml-20">
						<div className="head text-3xl mb-14 font-bold">Lets Talk ?</div>

						<TextField
							className={classes.inputbox}
							autoFocus="1"
							label="Your Name"
							name="firstname"
							onChange={handleChanges}
							value={value.firstname}
							type="text"
							variant="outlined"
							onBlur={blur}
						/>
						<div
							style={{
								marginTop: '-15px',
								paddingBottom: '15px',
								color: 'red',
								fontSize: '0.9rem',
								marginBottom: '4rem',
							}}
						>
							{errors.fnerror}
						</div>
						<div className="message-box">
							<TextField
								className={classes.root1}
								label="Your Email"
								name="email"
								onChange={handleChanges}
								value={value.email}
								type="email"
								variant="outlined"
								onBlur={blur}
							/>
						</div>
						<div
							style={{
								marginTop: '2px',
								paddingBottom: '15px',
								color: 'red',
								fontSize: '0.9rem',
								marginBottom: '4rem',
							}}
						>
							{errors.emailerror}
						</div>

						<div className="message-box">
							<TextField
								className={classes.root}
								label="Your Message"
								name="message"
								onChange={handleChanges}
								value={value.message}
								type="text"
								variant="outlined"
								onBlur={blur}
							/>
						</div>
						<div
							style={{
								marginTop: '2px',
								paddingBottom: '5px',
								color: 'red',
								fontSize: '0.9rem',
								marginBottom: '4rem',
							}}
						>
							{errors.mesgerror}
						</div>

						<Button
							className="submit"
							variant="contained"
							endIcon={<SendIcon />}
							style={{
								width: '12rem',
								height: '2.5rem',
								fontSize: '1.5rem',
								backgroundColor: 'rgba(67, 133, 243, 1)',
								color: 'white',
							}}
							onClick={onsubmit}
						>
							Submit
						</Button>
					</div>
				</div>
				<div className="box-secondary">
					<div className="box-image">
						<img
							style={{
								height: '700px',
								marginTop: '-120px',
								marginLeft: '-50px',
							}}
							src={Contactpage}
							alt=""
						/>
					</div>
					<div className="box-detail h-56 mr-14 w-11/12 ">
						<div className="box-address">
							<div class="h-28 w-28 p-7 ml-5">
								<FontAwesomeIcon icon={faMapMarkerAlt} color="rgba(16, 157, 88, 1)" size="2x" />
							</div>
							<div className="detail h-28 text-lg font-semibold  py-3">
								No. U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Rd, Opp.Cooper Hospital, Vile Parle,
								Mumbai, Maharashtra 400056{' '}
							</div>
						</div>
						<div className="box-address">
							<div class="h-28 w-28 p-7 ml-5">
								<FontAwesomeIcon icon={faPhoneAlt} color="rgba(16, 157, 88, 1)" size="2x" />
							</div>
							<div className="detail h-28 text-lg w-200 pl-3 p-6 font-semibold">+91 939282927</div>
						</div>
						<div class="box-map">
							<div>
								<iframe
									scrolling="no"
									marginheight="0"
									marginwidth="0"
									title="DJ Sanghavi College"
									src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dwarkadas%20J.Sanghavi%20+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
									width="100%"
									height="600"
									frameborder="0"
								>
									<a href="https://www.mapsdirections.info/en/measure-map-radius/">
										Map radius measure
									</a>
								</iframe>
							</div>
						</div>
						<div class="box-social ml-28 ">
							<img src="https://img.icons8.com/material-rounded/48/000000/phone--v1.png" alt="" />
							<a href="mailto:gdsc.djsce@gmail.com">
								<img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="" />
							</a>
							<a href="https://www.linkedin.com/company/gdsc-djsce/">
								<img src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png" alt="" />
							</a>
							<a href="https://www.instagram.com/gdsc.djsce/">
								<img src="https://img.icons8.com/material-rounded/48/000000/instagram-new.png" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
