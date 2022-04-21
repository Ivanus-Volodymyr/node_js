import {IMovie, IResults} from "./movie.interfase";
import {IGenreProp} from "./genre.interfase";
import {IMovieDetailsInterface} from "./movie.details.interface";

export interface IMoviesState {
    movies: IMovie;
    result: IResults[];
    currentPage: number;
    total_pages: number;
    genre: IGenreProp[];
    genreId: string;
    movieDetails: IMovieDetailsInterface;
    name: IResults[];
    filmName: string;
}

export interface II {
    name: string
}
