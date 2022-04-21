import React, {FC, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {IResults} from "../../interfaces";
import './MovieList.css'
import baseImageURL from "../../constants/img.url";

const MovieList: FC<{ result: IResults }> = ({result}) => {
    const {id, original_title, title, backdrop_path, release_date} = result;
    const [img, setImg] = useState('');

    useEffect(() => {
        setImg(baseImageURL + backdrop_path)
    }, [])
    return (
        <div className={'Movie'}>
            <Link to={`/movies/${id}/details`} className={'MovieLink'}>
                <img src={img} alt={title} width={'400px'}/>
                <div><h3>Title : {title}</h3></div>
                <div><h4>Original Title : {original_title}</h4></div>
                <div><h4>Release Date : {release_date}</h4></div>
            </Link>
        </div>
    );
};

export default MovieList;