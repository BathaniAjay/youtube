const Shimmer = ()=>{

    return (

        <div className="py-2 px-1 m-2 flex flex-wrap">
            {
                        new Array(50).fill("").map((item)=>{

                           return <div className=" m-2 w-[240px] h-[250px] shadow-lg">
                                       <div className="w-[240px] h-[140px] bg-gray-200" ></div>
                                       <div className="p-1">
                   
                                       <h3 className="font-bold">{
                                       
                                       }</h3>
                                       <h4 className="text-gray-500 font-bold my-1">{
                                       }</h4>
                                       <p></p>
                                       </div>
                               </div>
                               
                           })
            }
        </div>



    )
}

export default Shimmer;