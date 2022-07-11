import Button from "./Button"

const Header = ({addTask}) => {
  return (
    <div>
      <header className="header">
        <h1>to do list</h1>
        <Button name ="add" color = "#009933" onClick={addTask}/>
      </header>
    </div>
  )
}

export default Header
