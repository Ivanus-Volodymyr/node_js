import React, {FC} from 'react';

import './SwitherTheme.css'

const SwitcherTheme: FC = () => {
    const elementById = document.getElementById('root');

    const theme = () => {
        if (elementById) {
            elementById.classList.toggle('theme')
        }
    }

    return (
        <div className={'SwitcherTheme'}>
            <button onClick={() => theme()}>Change Theme</button>
        </div>
    );
};

export default SwitcherTheme;