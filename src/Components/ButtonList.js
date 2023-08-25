const ButtonList = ()=>{

    const buttonListItems = ['All','Music','Party','Javascript','Cookng','React', 'Arijit Singh','Node Js','Dj','Honey Singh','css','html']

    return (
        
        buttonListItems.map((btn, index) => <button key={index} className="font-bold px-3 py-1 bg-gray-200 rounded-md m-2">{btn}</button> )
        
    )
}

export default ButtonList;