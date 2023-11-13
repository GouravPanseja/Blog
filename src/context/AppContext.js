import {createContext} from "react";
import baseUrl from "../baseUrl";
import {useState} from 'react';

//step 1 to create the context
export const AppContext = createContext();

export default function AppContextProvider({children}){

    

    const [loading,setLoading] = useState(false);
    const [posts,setPosts] =useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    // filling in data 

    async function fetchBlogPosts(page=1){
        
        setLoading(true);
        
        let url = `${baseUrl}?page=${page}`

        try{
            const result = await fetch(url);
            const data = await result.json();

            console.log(data);

            setPage(data.page);                         // current page   --------> on re-render the function won't be affected as the value of page used in the function is already equal to the updated value
            setPosts(data.posts);                       // all posts on the page, an array of objects
            setTotalPages(data.totalPages);            // total pages ie 6

        }
        catch(error){
            console.log("Error in fetching data");
            
            setPage(1);                                 // on re-render the page number will be updated in the fetch function too so data of first page will be fetched
            setPosts([]);                               //
            setTotalPages(null);
            
        }
        setLoading(false);
    }

    function handlePageChange(page){
        fetchBlogPosts(page);
    }

    
    const value= {          // object of all the required data that is to be sent to the consumer
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPosts,
    }
// step 2 to provide the data
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
