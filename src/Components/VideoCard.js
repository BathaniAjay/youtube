const VideoCard = (video)=>{
    console.log('inside ',video.video.snippet)

      const {title,thumbnails, channelTitle} = video?.video?.snippet;
      const {viewCount} = video?.video?.statistics;
      
    return (
        <div className=" m-2 w-[240px] shadow-lg">
            <img alt="thumbnail" src={thumbnails?.medium?.url} />
            <div className="p-1">

            <h3 className="font-bold">{
                (title.length <= 37) ? title : title.substring(0,38)+" ..."
            }</h3>
            <h4 className="text-gray-500 font-bold my-1">{
            (channelTitle.length <= 37) ? channelTitle : channelTitle.substring(0,38)
            }</h4>
            <p>{viewCount} views</p>
            </div>
        </div>
    )
}
export default VideoCard;