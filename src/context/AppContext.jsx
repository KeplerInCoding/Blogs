import { createContext, useState } from "react";
import baseUrl from './baseURL.js';

//step 1 initialise
export const Appcontext = createContext();


//step 2 create provider
function AppContextProvider(){
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    //step 3 fill data
    async function fetchData(){
        setLoading(true);
        const url = `${baseUrl}`
    }



    const data = {
        loading,
        post,
        page,
        totalPages,
        setLoading,
        setPost,
        setPage,
        setTotalPages
    };
}


//step 4 provide data