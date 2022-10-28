

interface Props {
    id: String;
    name: String;
    callBack: Function;
}

function MenuBarButton({id,name,callBack}:Props) {
    return (<>
        <div className="m-2 py-2 px-3 rounded shadow" style={{backgroundColor:"whitesmoke"}}>
            <span onClick={()=>{callBack(id)}}>{name}</span>
        </div>
        
    </>  );
}

export default MenuBarButton;