import "./App.css"
import { useState } from "react"
function App() {
  const [horizontal, sethorizaontal] = useState(10)
  const [vertical, setvertical] = useState(10)
  const [blur, setblur] = useState(10)
  const [color, setcolor] = useState("#000")
  const [checkOn, setcheck] = useState(false)

  return (
    <>
    <h3>box shadow generator</h3>
    <div className="App">
      
      <div className="controls">

        <label>Horizontal length</label>
        <input type="range" min="-200" max="200" value={horizontal} onChange={(e) => { sethorizaontal(e.target.value) }} />

        <label>Vertical length</label>
        <input type="range" min="-200" max="200" value={vertical} onChange={(e) => { setvertical(e.target.value) }} />

        <label>Blur</label>
        <input type="range" min="-200" max="200" value={blur} onChange={(e) => { setblur(e.target.value) }} />

        <div className="adjust">

          <label>Color</label>
          <input type="color" min="-200" max="200" value={color} onChange={(e) => { setcolor(e.target.value) }} />
        </div>
        <div className="adjust">
          <div class="switch">
            <label>
              Outline
      <input type="checkbox" checked={checkOn} onChange={() => { setcheck(!checkOn) }} />
              <span class="lever"></span>
              Inset
    </label>
          </div>

        </div>

      </div>
      <div className="output">
        <div className="box" style={{ boxShadow: `${horizontal}px ${vertical}px ${blur}px ${color}  ${checkOn ? "inset" : ""}` }}>
          <p>box-shadow:{horizontal}px {vertical}px {blur}px {color} {checkOn ? "inset" : ""}</p>

        </div>

      </div>
    </div>
    </>
  );
}

export default App;
