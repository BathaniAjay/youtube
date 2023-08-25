const Comment = ({comment})=>{

    const {name, Description} = comment

    return <div className="shadow-lg bg-gray-100 mb-1 ml-2">
        <div className="flex items-center  p-0">
        <img className="h-10 p-2 m-1 " alt="user" src="https://imgs.search.brave.com/2ChBlWC_P2fxCSvr82kDGDmS-y1JkUs1PaHYa5uN9QE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdlL0NpcmNsZS1p/Y29ucy1wcm9maWxl/LnN2Zw.svg" />
        <div className="font-bold">{name}</div>
        </div>
        <p className="pl-12">{Description}</p>

    </div>
}

export default Comment;