import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    // text ="set the text" --> this is not correct way
    // setText("set the text of text vairable") --> this is correct way

    const hadlechange = (event) => {
        // console.log("writing in the text area ")
        setText(event.target.value)
        
    }
    const handleUpClick = () => {
        // console.log("clicked on upper case button" + text)
        setText("you have clicked on upper case ")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("convert to upper case","success")
    }
    
    const handleLoClick = () => {
        // console.log("clicked on upper case button" + text)
        setText("you have clicked on lower case ")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("convert to lower case","success")
    }
    
    const cleartextfunc = () => {
        let newText = ''

        setText(newText)
    }
    
    const copytextfunc = () => {
        var text = document.getElementById("floatingTextarea");
       text.select()
       navigator.clipboard.writeText(text.value)
        
    }
    
    const clearExtraSpacefunc = () => {
      let newText = text.split(/[ ] +/)
      setText(newText.join(" "))
    }
    

    return (
        <>
        
        <div>
            {/* <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address-{text}</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">{props.feedback}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="current-password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
            <div className="form-floating" style={{color:props.mode==="light"?"black":"white"}}>
                {/* <label >Enter your text</label> */}
                <h3 className= "mx-2 my-2">enter a text to process</h3>
                <div className='mb-3'>

                    <textarea className="form-control" placeholder="enter a text..." id="floatingTextarea" onChange={hadlechange} value={text} 
                    style={{backgroundColor:props.mode==="light"?"white":"black",color:props.mode==="light"?"black":"white"}}   rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 " onClick={handleUpClick}> UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}> LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={cleartextfunc}> clear Text</button>
                <button className="btn btn-primary mx-1" onClick={copytextfunc}> copy text</button>
                <button className="btn btn-primary mx-1" onClick={clearExtraSpacefunc}> clear Extra space</button>

            </div>
            <div style={{color:props.mode==="light"?"black":"white"}}>
                <h2>Summary : </h2> 
                <h6>total character : {text.length}</h6>
                <h6>total words : {text.split(" ").length}</h6>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the text in text box to preview here"}</p>

            </div>

        </div>
        </>
    )
}
