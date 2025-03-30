import React from 'react' ;

const Item = ({ item  , onDelete}) => {
    return(
        <>
        <div className="item-details">
            <h3>{item.name}</h3>
            <p>{item.status}</p>
            <button  className="deleteButton" onClick={()=>onDelete(item.id)}>Delete</button>
        </div>
        </>
    )
};

export default Item;
