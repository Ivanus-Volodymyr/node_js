import React, {FC} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import './Login.css'
import { useAppDispatch } from "../../../hooks";
import { loginUser } from "../../../store/slice/user.slice";
import { IUser } from "../../../interfaces/registration.interfase";

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, reset } = useForm();

    const submit:any = (data: Partial<IUser>) => {
        dispatch(loginUser(data))
        reset();
    }

    return(
        <div className={'loginBlock'}>
            <div className={'loginFormBlock'}>
                <div className={'please'}>
                    <h2>Please, enter you login and password for sing in...</h2>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'email...'} {...register('email')}/>
                    <input type="text" placeholder={'password...'} {...register('password')}/>
                    <button>Sing in</button>
                </form>
                <div className={'please'}>
                    <h2>Or you can register...</h2>
                </div>
                <Link to={'/registration'}>
                    <button>Registration</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;
