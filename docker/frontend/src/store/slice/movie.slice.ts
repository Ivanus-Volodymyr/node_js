import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenreProp, IResults} from "../../interfaces";
import {moviesServices, genresServices} from "../../services";
import {II, IMoviesState} from "../../interfaces/initialstate.interfase";



const initialState: IMoviesState = {
    movies: {},
    result: [],
    currentPage: 1,
    total_pages: 1,
    genre: [],
    genreId: '',
    movieDetails: {},
    name: [],
    filmName: ''
}

export const getAllMovies = createAsyncThunk(
    'movie/getAllMovies',
    async (currentPage: number, {dispatch, getState}) => {
        const state = getState() as { movieReducer: IMoviesState };

        const {data} = await moviesServices.getAll(currentPage, state.movieReducer.genreId);
        if (data.results && data.total_pages) {
            dispatch(setMovies({result: data.results, total: data.total_pages}))
        }
    }
)
export const getMovieByName = createAsyncThunk(
    'movie/getMovieByName',
    async (name: string, {dispatch, getState}) => {
        const state = getState() as { movieReducer: IMoviesState };
        const {data} = await moviesServices.getByName(name, state.movieReducer.currentPage);
        if (data.results) {
            dispatch(setMovieByName({result: data.results}))
        }
    }
)

export const getMovieById = createAsyncThunk(
    'movie/getMovieById',
    async (id: string, {dispatch}) => {
        const {data} = await moviesServices.getById(id);
        if (data) {
            dispatch(setMovieDetails(data))
        }
    }
);

export const getAllGenres = createAsyncThunk(
    'movie/getAllGenres',
    async (_, {dispatch}) => {
        const {data} = await genresServices.getAll();
        if (data.genres) {
            dispatch(setGenre({genre: data.genres}))
        }
    }
);


const movieSlice = createSlice({
        name: 'movie',
        initialState,
        reducers: {
            setMovies: (state, action: PayloadAction<{ result: IResults[], total: number }>) => {
                state.result = action.payload.result
                state.total_pages = action.payload.total
            },
            setPage: (state, action) => {
                if (action.payload === 0) {
                    state.currentPage = action.payload + 1;
                } else if (state.currentPage >= 1 && state.currentPage <= state.total_pages) {
                    state.currentPage += action.payload;
                } else if (state.currentPage < 1) {
                    state.currentPage = 1;
                } else if (state.currentPage > state.total_pages) {
                    state.currentPage = state.total_pages;
                }
            },
            setGenre: (state, action: PayloadAction<{ genre: IGenreProp[] }>) => {
                state.genre = action.payload.genre
            },
            setMovieByGenreId: (state, action: PayloadAction<{ genres: IGenreProp }>) => {
                if (action.payload.genres.id) {
                    state.genreId = action.payload.genres.id
                }
            },
            setMovieDetails: (state, action: PayloadAction<{}>) => {
                state.movieDetails = action.payload
            },
            setMovieByName: (state, action: PayloadAction<{ result: IResults[] }>) => {
                state.name = action.payload.result
                console.log(action.payload.result)
            },
            setFilmName: (state, action: PayloadAction<II>) => {
                state.filmName = action.payload.name
            }
        }
    })
;

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {
    setMovies,
    setPage,
    setGenre,
    setMovieByGenreId,
    setMovieDetails,
    setMovieByName,
    setFilmName
} = movieSlice.actions;