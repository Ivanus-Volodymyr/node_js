import React, {FC} from "react";

import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../../hooks";
import {registrationUser} from "../../../store/slice/user.slice";
import {IUser} from "../../../interfaces/registration.interfase";

import './Registration.css'


const Registration :FC = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useAppDispatch();

    const submit: any = (data: IUser) => {
        dispatch(registrationUser(data))
        reset();
    }

    return (
        <div className={'registrationBlock'}>
            <div className={'registrationFormBlock'}>
                <div className={'please'}>
                    <h2>Enter all fields...</h2>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'firstName...'} {...register('firstName')}/>
                    <input type="text" placeholder={'lastName...'} {...register('lastName')}/>
                    <input type="text" placeholder={'age...'} {...register('age')}/>
                    <input type="text" placeholder={'phone...'} {...register('phone')}/>
                    <input type="text" placeholder={'email...'} {...register('email')}/>
                    <input type="text" placeholder={'password...'} {...register('password')}/>
                    <button>Registration</button>
                </form>
            </div>
        </div>
);
}

export default Registration;
