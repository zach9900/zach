import Button from "./Button"
import { useState } from "react"

function AddTask() {

    const [text,setText] =useState('');
    const [day,setDate] =useState('');
    const [subTask,setSubTask] =useState('');

  return (
    <div className="add-form">
        <h2>add new task</h2>
        <form>
            <div className="form-control">
            <label className="form-control label">task name:</label>
            <input className="form-control input" type={"text"} required/>
            </div>

            <div className="form-control">
            <label className="form-control label">task time:</label>
            <input className="form-control input" type={"datetime-local"} required/>
            </div>

            <div className="form-control"> 
            <label className="form-control label">sub tasks:</label>
            <input className="form-control input" type={"text"} />
            </div>
            
            <input type={"submit"} value = "add task" className="btn btn-block"/>

            {/*<Button name={"add"} onClick={()=>{}} />*/}
        </form>
    </div>
  )
}

export default AddTask
