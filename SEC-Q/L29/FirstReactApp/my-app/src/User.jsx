function User(props){
    return (
        <div className="box">
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
        </div>
    )
}

export default User;