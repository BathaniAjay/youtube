const LiveComment = ({comments})=>{

    console.log('inside comments')

    const {name,text} = comments;

    return (
        <div className="flex items-center">
            <img className="h-10 p-2 my-1 mx-1" alt="user" src="https://imgs.search.brave.com/2ChBlWC_P2fxCSvr82kDGDmS-y1JkUs1PaHYa5uN9QE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdlL0NpcmNsZS1p/Y29ucy1wcm9maWxl/LnN2Zw.svg" />
            <h3 className="font-bold mr-1">{name + " : " } </h3>
            <p>{text}</p>
        </div>
    )
    }
export default LiveComment;