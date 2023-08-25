// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faClapperboard, faClockRotateLeft, faFire, faFireFlameCurved, faHeadphones, faHouse, faVideo,  } from "@fortawesome/free-solid-svg-icons";

const SideBar = ()=>{

    const navIcons = ['faHouse']
    const nav = ['Home','Shorts', 'Subscriptions', 'History','Your Videos','Trending', 'Movies','Music']

    return (

        <div className='w-[20%]'> 
            <ul className="p-2 m-2 shadow-lg h-[88vh] ">

            <li  className="font-bold text-gray-950 m-2 p-2 rounded-lg cursor-pointer text-left capitalize  bg-gray-100 "><FontAwesomeIcon icon={faHouse} className="pr-3" />Home</li>
            <li  className="font-bold text-gray-950 m-2 p-2 rounded-lg cursor-pointer text-left capitalize  bg-gray-100 "><FontAwesomeIcon icon={faFireFlameCurved} className="pr-3" />Shorts</li>
            <li  className="font-bold text-gray-950 m-2 p-2 rounded-lg cursor-pointer text-left capitalize  bg-gray-100 "><FontAwesomeIcon icon={faBriefcase} className="pr-3" />Subscriptions</li>
            <li  className="font-bold text-gray-950 m-2 p-2 rounded-lg cursor-pointer text-left capitalize  bg-gray-100 "><FontAwesomeIcon icon={faClockRotateLeft} className="pr-3" />History</li>
            <li  className="font-bold text-gray-950 m-2 p-2 rounded-lg cursor-pointer text-left capitalize  bg-gray-100 "><FontAwesomeIcon icon={faClapperboard} className="pr-3" />Your Videos</li>
            <li  className="font-bold text-gray-950 m-2 p-2 rounded-lg cursor-pointer text-left capitalize  bg-gray-100 "><FontAwesomeIcon icon={faFire} className="pr-3" />Trending</li>
            <li  className="font-bold text-gray-950 m-2 p-2 rounded-lg cursor-pointer text-left capitalize  bg-gray-100 "><FontAwesomeIcon icon={faVideo} className="pr-3" />Movies</li>
            <li  className="font-bold text-gray-950 m-2 p-2 rounded-lg cursor-pointer text-left capitalize  bg-gray-100 "><FontAwesomeIcon icon={faHeadphones} className="pr-3" />Music</li>
{/* {   

                 nav.map(navItem => {

                     console.log(navIcons[nav.indexOf(navItem)])
                     let iconName = navIcons[nav.indexOf(navItem)]
                  return <li key={nav.indexOf(navItem)} className="font-bold text-gray-950 m-2 p-2 rounded-lg cursor-pointer text-left capitalize  bg-gray-100 "><FontAwesomeIcon icon={{iconName}} /> {navItem}</li>
                  
                 }
                 )
} */}
            </ul>
        </div>
    )
}

export default SideBar;