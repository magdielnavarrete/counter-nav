import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemCount from './componets/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
    
     <NavBar />
     <ItemListContainer name='Gretting' />
     <ItemCount stock="5" initial={1} />
    
    </div>


  );
}

export default App;
