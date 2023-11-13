import {AppContext} from "../context/AppContext"
import {useContext} from "react"
export default function Pagination(){

    const {page,totalPages,fetchBlogPosts} = useContext(AppContext);

    function  nextClickHandler(){

        fetchBlogPosts(page+1);
    }
  
    function  prevClickHandler(){
        fetchBlogPosts(page-1);
    }
  
   
    return(
        <div className="w-full flex justify-center fixed bottom-0 bg-white border">
            <div className="flex justify-between w-[600px] items-baseline py-2" >

                <div>

                {
                    page>1 &&
                    (<button 
                    onClick= { ()=>{ fetchBlogPosts(page-1)}}
                    className="px-1 py-[5px] rounded border border-[2px] border-black-500 rounded-md mr-3 text-sm"
                    > PREVIOUS</button>)
                }

                { page<totalPages &&
                    (<button
                    className="px-1 py-[5px] rounded border border-[2px] border-black-500 rounded-md text-sm"
                    onClick= { ()=>{fetchBlogPosts(page+1)}}>NEXT</button>)
                }
                </div>

               

                <span className="font-bold text-sm">Page {page} of {totalPages}</span>
      
            </div>
        </div>
    )
}