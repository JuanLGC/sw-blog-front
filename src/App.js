import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import injectContext from "./store/appContext";
import { Home } from './views/home';
import { PersonView } from './views/personInfo';
import { PlanetView } from './views/planetInfo';
import { PeopleSection } from './views/people';
import { PlanetsSection } from './views/planets';
import { Forum } from './views/forum';
import { DiscussionComments } from './views/discussionComments';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/people/:id">
        <PersonView />
      </Route>
      <Route exact path="/planets/:id">
        <PlanetView />
      </Route>
      <Route exact path="/people">
        <PeopleSection />
      </Route>
      <Route exact path="/planets">
        <PlanetsSection />
      </Route>
      <Route exact path="/forum">
        <Forum />
      </Route>
      <Route exact path="/forum/discussion/:id">
        <DiscussionComments />
      </Route>
    </Switch>  
  </BrowserRouter>
  );
}


export default injectContext(App);
