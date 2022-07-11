import Header from "./components/Header";
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import data from "./data"
import { useState } from 'react'
import AddTask from "./components/AddTask";

function App() {

  let addMode =true;
  const [tasks, setTasks] = useState(data);
 
  const addTask = ()=>{addMode= !addMode;console.log(addMode)};
  const deleteTask = (id)=>{setTasks(tasks.filter((task)=>task.id!=id))}
  const editTask = ()=>{console.log("edit");}

 return (<div className="container">
        <Header addTask={addTask}/>
        {addMode?<AddTask/>:tasks.length>0?<Tasks tasks={tasks}  deleteTask={deleteTask} editTask={editTask} />:<h2>no tasks</h2>}
        
    
        </div>);


}



export default App;
