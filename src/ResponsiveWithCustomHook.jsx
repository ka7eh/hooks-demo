import React from 'react';

import {useElementRect} from './hooks';

const ResponsiveWithCustomHook = () => {
    const parentRef = React.useRef();

    const rect = useElementRect(parentRef);

    return (
        <div ref={parentRef} style={{ width: '70%', height: '50%' }}>
            <div>
                <div>Width: {rect.width}</div>
                <div>Height: {rect.height}</div>
            </div>
        </div>
    );
};

export default ResponsiveWithCustomHook;
