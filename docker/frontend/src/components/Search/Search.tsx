import React, {FC} from 'react';
import {useForm,} from "react-hook-form";

import {useAppDispatch} from "../../hooks";
import {setFilmName} from "../../store";
import './Search.css'
import {II} from "../../interfaces/initialstate.interfase";

const Search: FC = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useAppDispatch();

    const submit: any = (data: II) => {
        dispatch(setFilmName(data));
        reset();
    }

    return (
        <div className={'Search'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Search film by Name...'} {...register('name')}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default Search;