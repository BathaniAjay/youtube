import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchContainer from "./WatchContainer";

const Body = ()=>{



    const toggle = useSelector((store) =>{
        return store.toggle.isNavVisible;
    })

    return(
        <div className="flex">
        { (toggle &&  <SideBar />)}
        <Outlet />
        </div>
        
        )
}

export default Body;