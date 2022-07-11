import Button from "./Button"
const Task = ({task , deleteTask , editTask}) => {
  const onTaskDubleClicked = ()=>{console.log(`task: ${task.name} has been clicked`)};
    /*TODO if sub task complete show it in ui id all subs are complete 
        show in the ui that the main task is complete*/
  return (
    <div className="task" onDoubleClick={onTaskDubleClicked}>
        <h2>{task.name}</h2>
        <h3>{task.time}</h3>
        <li>{task.sub[0]}</li>
        {task.sub[1]!=undefined?<li>press to see more...</li>:''}
        <Button name= "edit" onClick={editTask} />
        <Button name= "delete" color = "#ff0000" onClick={()=>{deleteTask(task.id)}}/>
        
    </div>
  )
}



export default Task
