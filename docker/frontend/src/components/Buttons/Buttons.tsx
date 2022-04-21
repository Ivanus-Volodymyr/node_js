import React, {FC} from 'react';
import {useAppDispatch} from "../../hooks";

import {setPage} from "../../store";
import './Buttons.css'

const Buttons: FC = () => {
    const dispatch = useAppDispatch();


    return (
        <div className={'Buttons'}>
            <button onClick={() => dispatch(setPage(-1))}>Prev Page</button>
            <button onClick={() => dispatch(setPage(1))}>Next Page</button>
        </div>
    );
};

export default Buttons;