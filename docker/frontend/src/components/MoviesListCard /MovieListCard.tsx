import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieById} from "../../store";
import baseImageURL from "../../constants/img.url";
import './MovieListCard.css'
import StarsRating from "./StarsRating/StarsRating";

const MovieListCard: FC = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {movieDetails} = useAppSelector(state => state.movieReducer);

    const {
        backdrop_path,
        belongs_to_collection,
        original_title,
        poster_path,
        homepage,
        production_companies,
        production_countries,
        overview,
        revenue,
        title,
        vote_average,
        runtime,
        budget,
        status,
        spoken_languages,
        release_date,
        tagline,
        original_language,
        genres
    } = movieDetails;
    console.log(movieDetails)

    useEffect(() => {
        if (typeof id === "string") {
            dispatch(getMovieById(id))
        }
    }, [id, dispatch]);

    return (
        <div className={'Overview'}>
            <div className={'MovieDetailMain'}>
                <div className={'Title'}>
                    <div><h2>{title}</h2>
                        <h4>Release Date -- {release_date}</h4>
                        <h5>Status : {status}</h5>
                        <hr/>
                    </div>
                    <img src={baseImageURL + poster_path} alt={title}/>
                    <div><StarsRating/></div>
                    <h2>TMDB : {vote_average}</h2>
                </div>
                <div className={'Info'}>
                    <div className={'OfficialTitle'}><h2>Official Title: {original_title}</h2></div>
                    <div className={'InfoDetail'}>
                        <div>Tagline : {tagline} ;</div>
                        {belongs_to_collection &&
                        <div className={'Poster_path'}><img
                            src={baseImageURL + belongs_to_collection?.poster_path}
                            height={'400px'} alt={title}/>
                        </div>}
                        <hr/>
                        <div>Release date : {release_date} ;</div>
                        <div>Budget : {budget} $ ;</div>
                        <div>Revenue : {revenue} $ ;</div>
                        <div>Home page : <a href={homepage}>{homepage}</a> ;</div>
                        <div>Run time : {runtime} m ;</div>
                        <div>Original language : {original_language} ;</div>
                        <div>Spoken Languages :
                            <ul>
                                {spoken_languages?.map((value, index) => <li key={index}>{value.english_name}</li>)}
                            </ul>
                        </div>
                        <div>Genres :
                            <ul>
                                {genres?.map((value, index) => <li key={index}>{value.name}</li>)}
                            </ul>
                        </div>
                        <div>Production companies :
                            <ul>
                                {production_companies?.map((value, index) => <li key={index}>{value.name}</li>)}
                            </ul>
                        </div>
                        <div>Production countries :
                            <ul>
                                {production_countries?.map((value, index) => <li key={index}>{value.name}</li>)}
                            </ul>
                        </div>
                        <div>Official poster :</div>
                        <div className={'backdrop_path'}>
                            <img src={baseImageURL + backdrop_path} alt={title}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'AllInfo'}>
                <h3>Overview : </h3>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default MovieListCard;