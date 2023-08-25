import Comment from "./Comment"
// import { commentsData } from "../utils/constants"
const CommentList = ({comment})=>{

    return (

    <>
    {
        comment.map((co,index)=> 
        {
        return (
            <>
            <Comment key={index} comment ={co} />
            <div className="ml-4 border border-l-black">

            <CommentList key={index} comment={co.replies} />
            </div>
            </>
        )
        
        })
    }
       

    </>
    )
}
export default CommentList