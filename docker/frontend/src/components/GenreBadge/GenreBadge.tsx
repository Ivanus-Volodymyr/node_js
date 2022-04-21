import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres} from "../../store";
import Genre from "../Genre/Genre";
import './GenreBadge.css'
import UserInfo from "../User/UserInfo/UserInfo";

const GenreBadge: FC = () => {
    const {genre, genreId} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch, genreId])
    return (
        <>
            <div>
                <UserInfo/>
                <h3>You can choose a genre!</h3>
                <hr/>
            </div>
            {genre.map(value => <Genre key={value.id} genres={value}/>)}

        </>
    );
};

export default GenreBadge;
