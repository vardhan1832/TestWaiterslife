import React from "react";
import Item from "./Item";

const TableList = (props)=>{
    const onDelete = (id) =>{
        console.log('work',id)
        props.onDelete(id)
    }
    return (
        <div>
            {props.items.map((obj)=>{
                return(
                   <Item key={obj.Id} price={obj.Price} dish={obj.Dish} table={obj.Table} id={obj.Id} onDelete={onDelete} />
                )
            })}
        </div>
    )
}

export default TableList