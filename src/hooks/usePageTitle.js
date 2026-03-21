import { useEffect } from 'react';

const BASE = 'Atharva Chaphe';

const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} | ${BASE}` : `${BASE} | Full Stack Developer`;
    }, [title]);
};

export default usePageTitle;
