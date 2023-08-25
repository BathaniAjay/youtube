import { useDispatch, useSelector } from "react-redux";
import { closeSideBar, hamToggle } from "../utils/ToggleSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import CommentList from "./CommentList";
import { commentsData, nameList, makeid } from "../utils/constants";
import LiveComment from "./LiveComment";
import { addComment } from "../utils/CommentsSlice";



const WatchContainer = ()=>{
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const commentData = useSelector(store => store.cmt.comments)
    const [typedText,setTypedText] = useState("")
    console.log('cccc ',commentData);
    const id = searchParams.get("v")


    useEffect(()=>{

        dispatch(closeSideBar());
    },[])
    {console.log(id)
    }

    function generateName() {
        return nameList[Math.floor(Math.random() * nameList.length)];
    } 

    function generateText(){

        return makeid(10);
    }

  

    useEffect(()=>{

        const id = setInterval(()=>{

            let newComment = {
                name:generateName(),
                text:generateText(),
            }

            console.log(newComment)

            dispatch(addComment(newComment))

        },500)

        return ()=>{

            clearInterval(id);
        }

    },[])

    return (
        <div className="flex w-[100%]">
            <div className="flex flex-col w-[65%]">

            <iframe className="m-5" width="850" height="450" src={"https://www.youtube.com/embed/"+id} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <div className="border border-black m-2">
                <h2 className="font-bold p-2 m-2 border border-b-8 border-black">Comments :</h2>

                <CommentList  comment = {commentsData} />
            </div>  
            </div>

            <div className="border border-black w-[35%] h-[70vh] m-5">
                <h2 className="font-bold p-2 border border-b-red-500 border-b-4 h-[10%]">Live Chat</h2>
                <div className="h-[80%] overflow-y-scroll flex flex-col flex-col-reverse">
                    {
                        commentData.map((comment)=>{

                            return <LiveComment comments={comment} />
                        })
                    }

                </div>
                <div className="h-[10%] border border-yellow-700 pl-4 pt-1">
                    <form onSubmit={(e)=>{

                    e.preventDefault();
                    dispatch(addComment({name:'Ajay',text:typedText}))
                    setTypedText("");
                }}>
                        <input

                        onChange={(e)=>{

                            setTypedText(e.target.value);
                        }} 

                         className="py-1 px-1 w-[80%] border border-black outline-none" type="text" value={typedText} />
                        <button className="bg-green-400 px-2 py-1 ml-2">Send</button>
                    </form>
                </div>
            </div>
        </div>

        
    )
}

export default WatchContainer;