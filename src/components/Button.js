
const Button = ({name , color , onClick}) => {
  return (
    <button style={{backgroundColor : color}} className='btn' onClick={onClick}  >
        {name}
    </button>
  )
}

export default Button
