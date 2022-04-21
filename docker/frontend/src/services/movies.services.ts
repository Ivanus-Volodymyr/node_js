import {axiosServices} from "./axios.services";

import {urls} from "../constants";
import {IMovie} from "../interfaces";
import {IMovieDetailsInterface} from "../interfaces/movie.details.interface";

export const moviesServices = {
    getAll: (currentPage: number, genreId: string) => axiosServices.get<IMovie>(urls.movies + currentPage + '&with_genres=' + genreId),
    getById: (id: string) => axiosServices.get<IMovieDetailsInterface>(urls.movieById + `${id}?api_key=865a7502a1780159827b764af0bee919`),
    getByName: (name: string, currentPage: number) => axiosServices.get<IMovie>(urls.movieByName + name + '&page=' + currentPage)
}