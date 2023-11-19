import { createContext, useState } from "react";
import { baseUrl} from "../baseUrl";

//step 1 initialise
export const AppContext = createContext();


//step 2 create provider
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    //step 3 fill data
    async function fetchData(page=1, tag=null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        
        try{
            const response = await fetch(url);
            const blogs = await response.json();
            console.log(blogs);
            setPosts(blogs.posts);
            setPage(blogs.page);
            setTotalPages(blogs.totalPages);

        }
        catch(error){
            console.log("error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null); 
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchData(page);
    }



    const data = {
        loading,
        posts,
        page,
        totalPages,
        setLoading,
        setPosts,
        setPage,
        setTotalPages, 
        fetchData,
        handlePageChange
    };

    //step 4 provide data
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}





