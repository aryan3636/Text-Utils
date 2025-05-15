
export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })
  
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'dark',
    backgroundColor: props.mode === 'dark' ? props.themeColor : '#93add3'
  }
  
  return (
    <div className="container">
        <h1 className="my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>About TextUtils</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
          <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Lowercase to Uppercase</strong>
          </button>
          </h2>
          <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This feature allows you to instantly <strong>convert all the text you enter into uppercase letters. </strong>  
              Whether you're formatting headings, making your message stand out, or preparing content for consistent styling, 
              this tool helps you avoid manual retyping.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Uppercase to Lowercase</strong>
            </button>
          </h2>
          <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This feature allows you to instantly <strong>convert all the text you enter into lowercase letters. </strong>
              It's perfect for fixing text that was typed in caps lock or making large blocks of text more readable and relaxed in tone.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Clear text</strong>
            </button>
          </h2>
          <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              The Clear Text feature allows you to<strong> instantly remove all the text from the input area with a single click. </strong> 
              It helps you quickly reset the workspace when starting over, editing new content, or cleaning up after transformations.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
              <strong>Remove extra spaces</strong>
            </button>
          </h2>
          <div id="collapseFour" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              The Remove Extra Spaces feature <strong>cleans up your text by eliminating unnecessary spaces</strong> between words, sentences, or paragraphs. 
              It ensures your content is neat, consistent, and ready for publishing or further formatting.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
