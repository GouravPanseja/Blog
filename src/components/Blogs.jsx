import { useContext } from "react";
import {AppContext} from "../context/AppContext"
import Spinner from "./Spinner"
import "./Blogs.css"


export default function Blogs(){
    const {loading,posts}= useContext(AppContext);   // doubt
    console.log(posts.length)

    
    return(
        <div className="w-11/12 max-w-[600px] py-3 flex flex-col gap-y-7 mt-[68px] mb-[68px] ">
            {
                loading ? 
                (<Spinner/>):

                (
             
                posts.length===0 ?                                      // if data is fetched and thus loading in false but posts is empty 
                (<div> <p> No Post found</p></div>):
                (
                    posts.map((post)=>{                                 // loading is false and posts isn't empty
                       
                       return(
                        <div className="card" key={post.id}>
                            <p className="font-bold text-lg">{post.title}</p>

                            <p className="text-[12px]">
                                By<span className="italic">{post.author} </span> on <span className="underline font-bold">{post.category}</span>
                            </p>

                            <p className="text-[10px]">Posted on <span>{post.date}</span></p>

                            <p className="text-sm mt-[10px]">{post.content}</p>

                            <div className="text-blue-500 underline font-bold text-[10px] flex gap-x-2 mt-1">
                                {(post.tags).map((tag,index)=>{
                                    return <span key={index}> #{tag}  </span> 
                                })}
                            </div>
                       </div>
                       )
                       
                    })
                )

                )
            }
        </div>
    )
}