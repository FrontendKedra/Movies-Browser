import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./common/Header";
import { MovieList } from "./features/movies/MovieList";
import { MoviePage } from "./features/movies/MoviePage";
import { PeoplePage } from "./features/people/PeoplePage";
import { PersonPage } from "./features/people/PersonPage";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
      <Route path="/movie-list/movie-page/:id">
          <MoviePage />
        </Route>
        <Route path="/people/profile/:id">
          <PersonPage />
        </Route>
        <Route path="/movie-list">
          <MovieList />
        </Route>
        <Route path="/people">
          <PeoplePage />
        </Route>
        <Route path="/">
          <Redirect to="/movie-list" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;