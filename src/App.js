import React,{ useState } from 'react';
import './App.css';
import Todolists from './Todolists';

function App() {
  const [inputList,setInputList] =useState("");
  const [Items,setItems] = useState([]);

  const itemEvents = (event)=> {
    setInputList(event.target.value);
  }
  
  const listOfItems =() => {
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };


  const deleteItems=(id)=>{
    console.log("deleted");
    
    
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      });
    })
  }


  return (
   <div className='main_div'>
    <div className='center_div'>
    <br />
      <h1>ToDo list</h1>
      <br />
      <input type="text" placeholder='Add a Items' value={inputList} onChange={itemEvents} />
      <button onClick={listOfItems} >+</button>
      <ol>
        {/* <li>{inputList}</li> */}
        {
          Items.map((itemval,index)=>{
            return(
              <>
              <div className="todo_style">
           <Todolists key={index} id={index} text={itemval} onSelect = {deleteItems}/>
          </div>
          </>
          )
          })
        }
      </ol>
    </div>
   </div>
  );
}

export default App;



