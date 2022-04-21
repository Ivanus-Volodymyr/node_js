import React from 'react';
import {Link} from "react-router-dom";

import './User.css'

const UserInfo = () => {
    return (
        <Link to={'/login'}>
            <div className={'UserInfo'}>
                <div className={'UserImg'}>
                </div>
                <div className={'UserInformation'}>
                    <p>User Name</p>
                    <p>User Email...</p>
                </div>
            </div>
        </Link>
    );
};

export default UserInfo;
