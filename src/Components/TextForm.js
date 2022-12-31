import React, {useState} from 'react' 

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)

    }

    // Credits: A
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard","success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspaces are removed","success");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color:(props.mode)==='light'?'black':'white'}}> 
            <h1 >{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:(props.mode)==='dark'?'#1f1b1b':'white',color:(props.mode)==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-danger mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-danger mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-danger mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:(props.mode)==='light'?'black':'white'}}>
            <h2>Your text summary</h2> 
            <p>{(text.length===0||text.charAt(text.length-1)===' ')?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
