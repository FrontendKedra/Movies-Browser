import { Genre } from "../genresInterfaces/genres";
import { MovieGenre, ProductionCountry } from "../movieInterfaces/movieDetails";

export interface Id {
  id: string;
}

export interface LoaderProps {
  title: string;
}

export interface NoResultProps {
  query: string | null;
}

export interface PaginationProps {
  totalPages: number;
}

export type UsePageNumber = [number, (pageNumber: number) => void];

export interface GenreProps {
  genre_ids: number[];
  genres: Genre[];
}

export interface BigTileProps {
  poster_path?: string;
  title: string;
  release_date?: string;
  place_of_birth?: string;
  birthday?: string;
  rating?: number;
  votes?: number;
  countries?: ProductionCountry[];
  article: string;
  genres?: MovieGenre[];
  profile_path?: string;
}

export interface PersonTileProps {
  id: number;
  profile_path: string;
  name: string;
  big?: boolean;
  character?: string;
}

export interface Next {
  next?: boolean;
}

export interface MovieTileProps {
  id: number;
  poster_path: string;
  title: string;
  release_date?: string;
  rating: number;
  votes: number;
  genre_ids: number[];
  character?: string;
  job?: string;
  year?: string;
  genres: Genre[];
}

export interface BackdropProps {
  title: string;
  rating: number;
  votes: number;
  backdrop_path: string;
}

export interface PopularPayload {
  payload: {
    page: string | null;
    query: string | null;
  };
}

export interface PagePayload {
  payload: string;
}

export interface Big {
  big?: boolean;
}