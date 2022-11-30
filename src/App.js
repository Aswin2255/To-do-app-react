
import './App.css';
import {useState} from 'react'

function App() {
  const [todos,settodos] = useState([])
  let [todo,settodo] = useState('')
  let d = new Date()
  let dn = d.getDay()
  let days = ['sunday','monday','tuesday','wenesday','thursday','friday','saturday']
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
     

     
        <h2>Whoop, it's {days[dn]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo}  id = 'input'  onChange={(e)=>settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          settodos([...todos,{id:Date.now(),text:todo,status:false}])
          settodo('')
       }} className="fas fa-plus"></i>
       
      </div>
      {
              todos.map((e,index)=>{
               return (
                <div className="todos">
                <div className="todo">
                  <div className="left">
                    <input onChange={(event)=>{
                      
                      settodos(todos.filter((values)=>{
                        if(values.id === e.id){
                          values.status = event.target.checked
                          
                        }
                        return values
                       
                      }))
                    }} value={e.status} type="checkbox" name="" id="" />
                    <p>{e.text}</p>
                    
                   
                  </div>
                  <div className="right">
                    <i key={index} onClick={()=>{
                      settodos(todos.filter((elem,index)=>{
                        if(elem.id === e.id){
                          
                          
                          
                           todos.splice(index, 1)
                           
                            return settodos(todos)
                            
                           
                           

                        }
                       
                       return elem
                        
                        
                      }))
                    }} className="fas fa-times"></i>
                  </div>
                  
                  
                  
                </div>
              </div>
               )
              })
            
              
            }
            {
              todos.map((event)=>{
                if(event.status){
                  return(<h1>{event.text}</h1>)
                }
                return null
              })
            }
           
           
     
    </div>
  );
}

export default App;
