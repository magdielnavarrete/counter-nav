import React, {useState} from 'react';
import './ItemCount.css';
import { Button } from 'semantic-ui-react';


const ItemCount = (props) => {
    const [items, setItems] = useState(props.initial)
    // const [onAdd, setOnAdd] = useState(items)
    const addItem = () => {
        if(items < props.stock){
            setItems(items + 1)
          
        }
        else{
            console.log ("no puedes agregar más articulos")
        }
    };
     
    const restItem = () => {
        if(items > 1){
            setItems(items - 1)
        }
        else{
            console.log ("no puedes agregar menos de un articulo")
        }
    };
    const agregarItem = () =>{
        alert("agregaste " +items + " productos");
    }

    return (
        <div className="ItemCountcontainer">
            <h2>Producto para agregar</h2>
              <div className="ItemCountButton">
              <Button onClick={restItem} circular icon='minus' />
                    <h3>{items}</h3>
              <Button onClick={addItem} circular icon='plus' />
                    
             </div>
             <Button onClick={agregarItem}>Agregar</Button>
        </div>
    );
}

export default ItemCount;
