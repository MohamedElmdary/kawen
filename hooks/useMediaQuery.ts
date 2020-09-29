import { useState, useEffect } from 'react';

function useMediaQuery(media: string): boolean {
    const [match, setMatch] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(media);
        setMatch(mediaQuery.matches);
        const _onChange = (e: MediaQueryListEvent) => setMatch(e.matches);
        mediaQuery.addEventListener('change', _onChange);
        return () => {
            mediaQuery.removeEventListener('change', _onChange);
        };
    }, []);

    return match;
}

export default useMediaQuery;
