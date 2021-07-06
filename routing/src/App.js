import { Switch, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/all-meetups";
import FavoritesPage from "./pages/favorites";
import NewMeetupPage from "./pages/new-meetup";

import Layout from "./components/layout/layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
