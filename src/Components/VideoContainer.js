import { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";
import { YOUTUBE_URI } from "../utils/constants";
import Shimmer from "../utils/Shimmer";
const VideoContainer = ()=>{
    const [videoList,setVideoList] = useState([]);

    async function fetchData(){
        let data = await fetch(YOUTUBE_URI);
        let json = await data.json();
        console.log(json.items);
        setVideoList(json.items);
    }

    useEffect(()=>{

        fetchData();

    },[])

    return (
        <div className="p-2 w-[100%]">

            <ButtonList />
           {(videoList?.length < 1) ? <Shimmer /> : <VideoList videos = {videoList} />  } 
            {/* <VideoList videos = {videoList} /> */}
        </div>
    )
}

export default VideoContainer;