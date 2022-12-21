import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleFindReplace = () => {
        let newText = text.replace(findText, replaceText);
        setText(newText);
        props.showAlert("Text Replaced", "success");
    }

    const handleOnChange = (event) => {
        // console.log("onChange was clicked");
        setText(event.target.value);
    }

    const handleOnFind = (event) => {
        // console.log("onChange was clicked");
        setFindText(event.target.value);
    }
    const handleOnReplace = (event) => {
        // console.log("onChange was clicked");
        setReplaceText(event.target.value);
    }

    const [text, setText] = useState("");
    // text = "new text"  // wrong way to change the state 
    // setText("new text")  // correct way to change the state

    // for find and replace
    
    const [findText, setFindText] = useState("");
    const [replaceText, setReplaceText] = useState("");

    let frStyle = {
        width: "40%",
        float: "left",
        padding: "5px"
    }

    return (
    <>
    {/* style = {mystyle}, where mystyle is js object, that's why we use 2 curly braces {{}} below*/}
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#13466e":"white", color: props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-4" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        {/* split with 1 or more spaces, including newline /n, etc */}
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>It would take {0.08 * text.split(/\s/).filter((element)=>{return element.length!==0}).length} minutes to read this.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview it here"}</p>
    </div>
    <div className="container my-4" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Find and replace</h2>
        <div className="mb-3" style={frStyle}>
            <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#13466e":"white", color: props.mode==="dark"?"white":"black"}} value={findText} onChange={handleOnFind} id="myBox" rows="2"></textarea>
        </div>
        <div className="mb-3" style={frStyle}>
            <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#13466e":"white", color: props.mode==="dark"?"white":"black"}} value={replaceText} onChange={handleOnReplace} id="myBox" rows="2"></textarea>
        </div>
        <button disabled={text.length===0 || findText.length===0 || replaceText.length===0} className="btn btn-primary mx-2 my-2" onClick={handleFindReplace}>Replace</button>
    </div>
    </>
  )
}
