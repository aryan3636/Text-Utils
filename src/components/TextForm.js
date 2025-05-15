import { useState } from 'react'

export default function TextForm(props) {

  const handleOnChange = (event) => {
    console.log("on change")
    setText(event.target.value)
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted into uppercase!', 'success')
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted into lowercase!', 'success')
  }
  const handleClearClick = () => {
    setText('')
    props.showAlert('Text cleared!', 'success')
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success")
  }
  const [text, setText] = useState('')
  return (
    <>
    <div className='container my-4'>
      <div className="mb-3" style={{color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <textarea style={{backgroundColor: props.mode === 'dark' ? '#1a1a1a' : 'white' , color: props.mode === 'light' ? 'black' : 'white'}} value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button
        disabled= {text.length === 0}
        className="btn mx-1"
        style={{
          backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
          color: 'white',
          border: '1px solid white'
        }}
        onClick={handleUpClick}
      >
        Convert to uppercase
      </button>
      <button 
        disabled= {text.length === 0}
        className="btn mx-1" 
        style={{
          backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
          color: 'white',
          border: '1px solid white'
        }}
        onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button 
        disabled= {text.length === 0}
        className="btn mx-1" 
        style={{
          backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
          color: 'white',
          border: '1px solid white'
        }}
        onClick={handleClearClick}>
        Clear
      </button>
      <button 
        disabled= {text.length === 0}
        className="btn mx-1" 
        style={{
          backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
          color: 'white',
          border: '1px solid white'
        }}
        onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white' }}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
      <p>{ 0.008 * text.split("").length } minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text: 'Enter something in the textarea to preview it here!'}</p>
    </div>
    </>
  )
}
