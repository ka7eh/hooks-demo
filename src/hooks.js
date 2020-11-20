import React from 'react';

export const useElementRect = (elementRef) => {
    const [rect, setRect] = React.useState({
        width: null,
        height: null,
        top: null,
        right: null,
        bottom: null,
        left: null,
        marginTop: null,
        marginRight: null,
        marginBottom: null,
        marginLeft: null,
        paddingTop: null,
        paddingRight: null,
        paddingBottom: null,
        paddingLeft: null
    });

    React.useEffect(() => {
        const handleResize = () => {
            const element = elementRef.current;
            if (element) {
                const { width, height, top, bottom, right, left } = element.getBoundingClientRect();
                const refStyle = window.getComputedStyle(element);
                const paddingTop = parseFloat(refStyle.paddingTop);
                const paddingRight = parseFloat(refStyle.paddingRight);
                const paddingBottom = parseFloat(refStyle.paddingBottom);
                const paddingLeft = parseFloat(refStyle.paddingLeft);
                const marginTop = parseFloat(refStyle.marginTop);
                const marginRight = parseFloat(refStyle.marginRight);
                const marginBottom = parseFloat(refStyle.marginBottom);
                const marginLeft = parseFloat(refStyle.marginLeft);

                setRect({
                    width,
                    height,
                    top,
                    right,
                    bottom,
                    left,
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft,
                    paddingTop,
                    paddingRight,
                    paddingBottom,
                    paddingLeft
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [elementRef]);

    return rect;
};
