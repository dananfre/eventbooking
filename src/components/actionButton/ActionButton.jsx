import './actionButton.css'

function ActionButton( {btnText, onClick} ) {
  return (
    <button className='actionButton' onClick={onClick}>{btnText}</button>
  )
}

export default ActionButton