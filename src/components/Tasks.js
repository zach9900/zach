import Task from "./Task.js"

const Tasks = ({tasks , deleteTask , editTask}) => {
  return (
    <div>
        {tasks.map((task)=>(
        <Task key={task.id} task={task} deleteTask ={deleteTask} editTask ={editTask}/>
        ))}
    </div>
  )
}

export default Tasks
