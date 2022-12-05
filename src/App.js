import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./common/Header";
import { People } from "./features/peoplePages/People";
import { Profile } from "./features/peoplePages/Profile";
import { MovieList } from "./features/moviePages/MovieList";
import { MoviePage } from "./features/moviePages/MoviePage";

function App() {

  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/movie-list">
          <MovieList />
        </Route>
        <Route path="/movie-page">
          <MoviePage />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Redirect to="/movie-list" />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
