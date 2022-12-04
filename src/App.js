import { Header } from "./common/Header";
import { BigTile } from "./common/tiles/BigTile";
import { MovieTile } from "./common/tiles/MovieTile";
import { PersonTile } from "./common/tiles/PersonTile";
import { MovieList } from "./features/movies/MovieList";
import { PeoplePage } from "./features/peoplePages/PeoplePage";

function App() {
  return (
    <div>
      <Header />
      {/* <PeoplePage /> */}
      <BigTile />
      {/* <MovieList /> */}
      {/* <PersonTile /> */}
      {/* <MovieTile /> */}
    </div>
  );
}

export default App;
