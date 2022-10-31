import {useEffect} from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Shamim Sarker`;
    }, [title]);
};

export default useTitle;