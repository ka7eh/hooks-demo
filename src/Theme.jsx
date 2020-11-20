import React from 'react';
import {AppContext, getRandomColor} from './App';

const Theme = () => {
    const { theme, dispatch } = React.useContext(AppContext);

    return (
        <div style={{ width: 300, height: 200, background: theme }}>
            <p>{theme}</p>
            <button onClick={() => dispatch({ type: 'theme', value: getRandomColor() })}>Pick a random color</button>
        </div>
    )
};

export default Theme;
