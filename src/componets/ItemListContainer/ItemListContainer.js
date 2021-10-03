import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = ({name}) => {
    return (
        <div className="contendorItemList">
            <h2>Bienvenido nombre de {name}</h2>
        </div>
    )
}

export default ItemListContainer
