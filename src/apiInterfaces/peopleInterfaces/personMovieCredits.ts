export interface Cast {
  character: string;
  credit_id: string;
  release_date: string;
  vote_count: number;
  video: boolean;
  adult: boolean;
  vote_average: number;
  title: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
}

export interface Crew {
  id: number;
  department: string;
  original_language: string;
  original_title: string;
  job: string;
  overview: string;
  vote_count: number;
  video: boolean;
  poster_path: string;
  backdrop_path: string;
  title: string;
  popularity: number;
  genre_ids: number[];
  vote_average: number;
  adult: boolean;
  release_date: string;
  credit_id: string;
}

export interface PersonMovieCredits {
  cast: Cast[];
  crew: Crew[];
  id: number;
}
