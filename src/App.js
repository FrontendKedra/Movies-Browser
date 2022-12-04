import { Header } from "./common/Header";
import { BigTile } from "./common/tiles/BigTile";
import { MovieTile } from "./common/tiles/MovieTile";
import { PersonTile } from "./common/tiles/PersonTile";
import { MovieList } from "./features/movies/MovieList";
import { MoviePage } from "./features/movies/MoviePage";
import { Backdrop } from "./features/movies/MoviePage/Backdrop";
import { PeoplePage } from "./features/peoplePages/PeoplePage";

function App() {
  return (
    <div>
      <Header />
      <MoviePage />
      {/* <Backdrop /> */}
      {/* <PeoplePage /> */}
      {/* <BigTile /> */}
      {/* <MovieList /> */}
      {/* <PersonTile /> */}
      {/* <MovieTile /> */}
    </div>
  );
}

export default App;
