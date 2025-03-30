import ItemList from "./components/ItemList" ;
import {useState , useEffect} from 'react' ;
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([])  
  const [error , setError] = useState(null) ;

useEffect(()=>{
  fetch(API_URI)
  .then(res=>res.json())
  .then(data=>setItems(data))
  .catch(err=>(setError(err.message)))
} , [])

  const handleDelete = async(id)=>{
    try{
      const response = await fetch(`${API_URI}/${id}`, {
        method : 'DELETE'} 
      ) ;
      if (!response.ok){
        setError("Failed to delete item !")
      }
      setItems((items)=>items.filter(item=>item.id !== id))
    }
    catch(err){
      setError(err.message) ;
    }
  }
  if (error){
    return <div>Error : {error.message}</div>
  }
  

  return <ItemList items={items} onDelete={handleDelete}/>
}

export default App;
