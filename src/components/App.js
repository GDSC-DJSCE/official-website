import { Redirect, Route, Switch } from "react-router-dom";
import {
  Home,
  Events,
  Contact,
  Lead,
  ContentEditorial,
  DomainHead,
  ProjectTeam,
  OutreachEvents,
  Team,
} from "../pages";
import EventsDetail from '../pages/EventsDetail';
import { Header, Footer } from "./";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/team/lead" component={Lead} />
        <Route exact path="/team/domain-head" component={DomainHead} />
        <Route path="/events/:id" component={EventsDetail} />
        <Route
          exact
          path="/team/content-editoral"
          component={ContentEditorial}
        />
        <Route exact path="/team/project-team" component={ProjectTeam} />
        <Route exact path="/team/outreach-events" component={OutreachEvents} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
