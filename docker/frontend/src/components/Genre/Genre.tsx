import React, {FC} from 'react';
import {IGenreProp} from "../../interfaces";

import './Genre.css'
import {useAppDispatch} from "../../hooks";
import {setMovieByGenreId} from "../../store";

const Genre: FC<{ genres: IGenreProp }> = ({genres}) => {
    const dispatch = useAppDispatch();
    const {name} = genres;


    return (
        <div>
            <button className={'GenreButton'}
                    onClick={() => dispatch(setMovieByGenreId({genres}))}>
                <div>{name}</div>
            </button>
        </div>
    );
};

export default Genre;