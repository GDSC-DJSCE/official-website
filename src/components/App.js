import { Redirect, Route, Switch } from "react-router-dom";
import { Home, Events, Contact, Team } from "../pages";
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
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
