import React, { useState } from 'react'
export default function Card() {
  const [mode, changeMode] = useState(
    {
      color: "black",
      backgroundColor: "white"
    }
  )
  const[btn , setBtn] = useState("Dark Mode")
   const clickFunc =()=>
   {
       if(mode.color ==="black")
       {
         changeMode({
          color: "white",
          backgroundColor: "black",
          border : "1px solid white"
          })
          setBtn("Light Mode")
       }
       else
       {
        changeMode({
          color: "black",
          backgroundColor: "white"
          })
          setBtn("Dark Mode")
       }
   }

  return (

    <>
      <div className="display-name container" style={mode} >
        <div className="card margin-unit"  style={{ width: '18rem',mode }}>
          <img src="Apple Wallpaper.jpeg" className="card-img-top"  style={mode} alt="no internet" />
          <div className="card-body"  style={mode}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card margin-unit" style={{ width: '18rem',mode }}>
          <img src="Apple Wallpaper.jpeg" className="card-img-top" style={mode} alt="no internet" />
          <div className="card-body"  style={mode}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card margin-unit" style={{ width: '18rem',mode }}>
          <img src="Apple Wallpaper,jpeg" className="card-img-top"  style={mode}alt="no internet" />
          <div className="card-body"  style={mode}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card margin-unit" style={{ width: '18rem',mode }}>
          <img src="Apple Wallpaper.jpeg" className="card-img-top" style={mode} alt="no internet" />
          <div className="card-body"  style={mode}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div><button onClick={clickFunc} className='btn btn-primary '>{btn}</button></div>

    </>
  )
}