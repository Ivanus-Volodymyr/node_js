import React, {FC} from 'react';

import './Footer.css'

const Footer: FC = () => {
    return (
        <div className={'Footer'}>
            <div className={'FooterUser'}>
                <p>Іванус Володимир</p>
                <p>Telegram : @ivanys_23</p>
                <p>sep-2021</p>
            </div>
        </div>
    );
};

export default Footer;