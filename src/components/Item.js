import React from "react";

const Item = (props)=>{
    let id = props.id
    const deleteHandler = () =>{
        props.onDelete(id)
    }
    return (
        <div>
            <h5>{props.price}-Table{props.table},{props.dish}<button onClick={deleteHandler}>Delete Order</button></h5>
        </div>
    )
}

export default Item