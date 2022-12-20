import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

import { Redirect, Route, Switch } from 'react-router-dom';
import {
	Home,
	Events,
	Contact,
	ContentEditorial,
	DomainHead,
	DomainHead2,
	ProjectTeam,
	OutreachEvents,
	Team,
} from '../pages';
import EventsDetail from '../pages/EventsDetail';
import { Header, Footer } from './';

import '../styles/darkTheme.css';
import NewTeam from '../pages/newTeam/NewTeam';
import { Toaster } from 'react-hot-toast';

function App() {
	const { darkMode } = useContext(ThemeContext);
	return (
		<>
			<div className={darkMode ? 'darkBG' : 'lightBG'}>
				{/* <div className="darkBG"> */}
				<Header />
				<Toaster position="top-center" />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/events" component={Events} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/team" component={NewTeam} />
					{/* <Route exact path="/newteam" component={NewTeam} /> */}
					<Route exact path="/team/domain-head" component={DomainHead} />
					<Route exact path="/team/domain-head2" component={DomainHead2} />
					<Route path="/events/:id" component={EventsDetail} />
					<Route exact path="/team/content-editoral" component={ContentEditorial} />
					<Route exact path="/team/project-team" component={ProjectTeam} />
					<Route exact path="/team/outreach-events" component={OutreachEvents} />
					<Redirect to="/" />
				</Switch>

				<Footer />
			</div>
		</>
	);
}

export default App;
