import React from 'react'

// import React, { useState } from 'react'
export default function Card(props) {
  // const [mode, changeMode] = useState(
  //   {
  //     color: "black",
  //     backgroundColor: "white"
  //   }
  // )
  // const [btn, setBtn] = useState("Dark Mode")
  // const clickFunc = () => {
  //   if (mode.color === "black") {
  //     changeMode({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white"
  //     })
  //     setBtn("Light Mode")
  //   }
  //   else {
  //     changeMode({
  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //     setBtn("Dark Mode")
  //   }
  // }
  let myStyle =
  {
            color: props.mode === "dark" ?"white" :"black" ,
            backgroundColor: props.mode === "dark" ? "black" :"white" ,
            // border: "px solid white"
  }

  return (

    <>
      <h2 style={ {color: props.mode === "light" ?"dark" :"light"}}>About Us</h2>
      <div className="display-name container" style={myStyle} >
        <div className="card margin-unit" style={{ width: '18rem', myStyle }}>
          <img src="Apple Wallpaper.jpeg" className="card-img-top" style={myStyle} alt="no internet" />
          <div className="card-body" style={myStyle}>
            <h5 className="card-title" style={myStyle} >Analyze Your text</h5>
            <p className="card-text">Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character and manage extra space from the data </p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card margin-unit" style={{ width: '18rem', myStyle }}>
          <img src="Apple Wallpaper.jpeg" className="card-img-top" style={myStyle} alt="no internet" />
          <div className="card-body" style={myStyle}>
            <h5 className="card-title">Free to use</h5>
            <p className="card-text">TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card margin-unit" style={{ width: '18rem', myStyle }}>
          <img src="Apple Wallpaper,jpeg" className="card-img-top" style={myStyle} alt="no internet" />
          <div className="card-body" style={myStyle}>
            <h5 className="card-title">Browser Compatible</h5>
            <p className="card-text">This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc..</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card margin-unit" style={{ width: '18rem', myStyle }}>
          <img src="Apple Wallpaper.jpeg" className="card-img-top" style={myStyle} alt="no internet" />
          <div className="card-body" style={myStyle}>
            <h5 className="card-title">some feature</h5>
            <span className="card-text">
              <ul>
              <li>UpperCase</li>
              <li>LowerCase</li>
              <li>copy Text</li>
              <li>remove extra spaces</li>
              </ul>
            </span>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      {/* <div><button onClick={clickFunc} className='btn btn-primary '>{btn}</button></div> */}

    </>
  )
}