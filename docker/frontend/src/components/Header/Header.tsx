import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import {setPage} from "../../store";
import './Header.css'
import SwitcherTheme from "../SwitcherTheme/SwitcherTheme";

const Header: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={'Header'}>
            <Link onClick={() => dispatch(setPage(0))} to={'/'}
                  className={'HomeLink'}><span>Back to Main Page</span></Link>
            <h2> TMDB Films </h2>
            <div className={'Switcher'}>
                <SwitcherTheme/>
            </div>
        </div>
    );
};

export default Header;