import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {getAllMovies, getMovieByName} from "../../store";
import MovieList from "../../components/MoviesList/MovieList";
import './MoviePage.css'
import Search from "../../components/Search/Search";
import Buttons from "../../components/Buttons/Buttons";
import GenreBadge from "../../components/GenreBadge/GenreBadge";


const MoviesPage = () => {
    const {result, currentPage, genreId, filmName, name} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (filmName === '') {
            dispatch(getAllMovies(currentPage))
        } else if (filmName !== '') {
            dispatch(getMovieByName(filmName))
        }
    }, [currentPage, genreId, filmName, dispatch])

    return (

        <div className={'MainMovie'}>
            <div className={'GenreList'}>
                <GenreBadge/>
            </div>
            <div className={'MovieListMain'}>
                <Search/>
                <div>
                    {filmName && <div className={'FilmName'}>All results by movie title <span>{filmName}</span></div>}
                </div>
                <div className={'MovieList'}>
                    {filmName === '' && result.map(result => <MovieList key={result.id} result={result}/>)}
                    {filmName !== '' && name.map(result => <MovieList key={result.id} result={result}/>)}
                </div>
                <div>
                    <Buttons/>
                </div>
            </div>
        </div>
    );
};

export default MoviesPage;