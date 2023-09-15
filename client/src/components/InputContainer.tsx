import './input-container.css'
function InputContainer() {
    const logClick = () => {
        console.log('clicked');
        return 0;
    };
  return (
    <div className="input-container">
        <input type="text" className="input-box" placeholder="Type your message..." />
        <button className="send-button" >Send</button>
    </div>
  )
}

export default InputContainer;

