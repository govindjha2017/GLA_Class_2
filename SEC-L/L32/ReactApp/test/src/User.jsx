import "./css/style.css"

function User(props){
    return (
        <div className="box">
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}

export default User;