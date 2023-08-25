import { useDispatch, useSelector } from "react-redux";
import { hamToggle } from "../utils/ToggleSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_URI } from "../utils/constants";
import { updateCache } from "../utils/SearchSlice";

const Header = ()=>{

    const [searchText,setSearchText] = useState("");
    const [suggestions,setSuggestions] = useState([])
    const [suggestionsVisibility, setSuggestionsVisibility] = useState(false);

    const dispatch = useDispatch()
    const cacheData = useSelector(store=>store.cache.searchCache);
    // console.log('cached data : ',cacheData)

    const toggle = ()=>{

        dispatch(hamToggle())
    }

    const getSuggestions = async()=>{

        console.log('api called')
        const data = await fetch(YOUTUBE_SUGGESTION_URI+searchText);
        const json = await data.json();
        setSuggestions(json[1])
        dispatch(updateCache({[searchText]:json[1]}))
  
    }

    useEffect(()=>{

        const counter = setTimeout(()=>{

            console.log(cacheData)
            if(cacheData[searchText]){
                // console.log('inside cache')
                setSuggestions(cacheData[searchText])

            }else{

                getSuggestions();
            }
            // console.log(suggestions);
        },200)

        return ()=>{

            clearTimeout(counter);
        }


    },[searchText])

    return (
        
        <div className="flex shadow-lg">
            <div className="flex w-[20%]">
                <img onClick={
                    ()=>{
                        toggle();
                    }
                } className="h-12 p-3 cursor-pointer m-2" alt="hamburger" src="https://imgs.search.brave.com/nNwfqcojM5LYRp6EcdM9MQTs6-FyQGil9JlYEXAeSNs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L1doYXQlMjBpcyUy/MGElMjBIYW1idXJn/ZXIlMjBCdXR0b24u/cG5nP3dpZHRoPTIy/NSZuYW1lPVdoYXQl/MjBpcyUyMGElMjBI/YW1idXJnZXIlMjBC/dXR0b24ucG5n" />
                <img className="h-12 m-2" alt="youtube logo" src="https://imgs.search.brave.com/aTvtMzH9wNXK3PBIAudGtliFpCKkekfvoSjfY32X-gs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzA5LzEzLzMx/LzM2MF9GXzYwOTEz/MzEyMl91NXZhaXlD/SHNMNVVxdGRyU05y/VjVsbEwySkMxb1lX/aS5qcGc"/>
            </div>

            <div className="w-[70%]">
                <input onChange={
                    (e)=>{

                        setSearchText(e.target.value);
                    }
                }
                onFocus={()=>{
                    setSuggestionsVisibility(true);
                }}
                onBlur={()=>{
                    setSuggestionsVisibility(false);
                }}
                className="w-[60%] border-solid border-gray-500 border-2  rounded-l-full p-2 mt-2" type="text"></input>
                <button className="border-solid border-gray-500 border-l-0 rounded-r-full bg-gray-100 border-2 py-2 px-3"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

                {
                    (suggestionsVisibility &&  <ul className="border-solid border-1 border-yellow-100 shadow-lg rounded-lg w-[42%] absolute bg-white">
                    {
                        suggestions.map((sResult,index)=>{

                           return <li key={index} className="p-2 hover:bg-gray-100 cursor-default"><FontAwesomeIcon className="pr-1" icon={faMagnifyingGlass} />{sResult}</li>
                        })
                    }
                </ul>)
                }

            </div>
            <div className="w-[10%]">
                <img className="h-12 p-2 m-2" alt="user" src="https://imgs.search.brave.com/2ChBlWC_P2fxCSvr82kDGDmS-y1JkUs1PaHYa5uN9QE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdlL0NpcmNsZS1p/Y29ucy1wcm9maWxl/LnN2Zw.svg" />
            </div>
        </div>
        )
}

export default Header;