
import './App.css';
import {useState} from 'react'

function App() {
  const [todos,settodos] = useState([])
  const [todo,settodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{settodos([...todos,{id:Date.now(),text:todo,status:false}])}} className="fas fa-plus"></i>
       
      </div>
      {
              todos.map((e)=>{
               return (
                <div className="todos">
                <div className="todo">
                  <div className="left">
                    <input onChange={(event)=>{
                      settodos(todos.filter((values)=>{
                        if(values.id === e.id){
                          values.status = event.target.value
                          
                        }
                        return values
                       
                      }))
                    }} value={e.status} type="checkbox" name="" id="" />
                    <p>{e.text}</p>
                    
                   
                  </div>
                  <div className="right">
                    <i className="fas fa-times"></i>
                  </div>
                  
                  
                  
                </div>
              </div>
               )
              })
            
              
            }
            {
              todos.map((event)=>{
                console.log(event.status)
                return null
              })
            }
           
           
     
    </div>
  );
}

export default App;
