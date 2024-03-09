export default function Friend({friend}){
    
    const styleFriend={
        border:"2px solid aqua",
        margin: "20px",
        padding: "20px",
        borderRedius: "10px"
    }
    const {name, email} = friend;

    return(
        <div style={styleFriend}>
            <h4>namee:{name}</h4>
            <p> Email : {email}</p>
        </div>
    )
}