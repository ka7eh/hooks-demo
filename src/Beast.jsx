import React from 'react';

const Beast = () => {
    const [beastType, updateBeastType] = React.useState('Cat');

    const [beastIndex, updateBeastIndex] = React.useState(1);

    React.useEffect(() => {
        const catInterval = setInterval(() => {
            updateBeastIndex(Math.ceil(Math.random() * 15));
        }, 5000);
        return () => {
            clearInterval(catInterval);
        };
    }, []);

    React.useEffect(() => {
        document.title = `Index: ${beastIndex} | ${beastType} Viewer`;
    }, [beastType, beastIndex]);

    let beastUrl;
    switch (beastType) {
        case 'Dog':
            beastUrl = 'https://placedog.net/200/200?id=';
            break;
        case 'Cat':
        default:
            beastUrl = 'https://placekitten.com/200/200?image=';
            break;
    }

    return (
        <div>
            <select value={beastType} onChange={({ target: { value }}) => updateBeastType(value)}>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
            </select>
            <p>{beastType} index: {beastIndex}</p>
            <img width={200} height={200} src={`${beastUrl}${beastIndex}`} alt={beastIndex} />
        </div>
    );
};

export default Beast;
