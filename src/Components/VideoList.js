import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoList = ({videos})=>{

                // const video1 = videos[0];



    return (

        <div className="py-2 px-1 m-2 flex flex-wrap">
            {
                videos.map((video,index)=>{

                    console.log('vid', video)

                    return <Link key={index} to={'/watch?v='+video.id}><VideoCard video={video} /></Link>
                })
            }

        </div>
    )
}

export default VideoList;