import './App.css';
// import React from 'react';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('#212121');

  return (
   <div className="box" style={{backgroundColor: color}}>
    <div className="colorBar">
      <button className="color" onClick={() => {setColor("red")}} style={{backgroundColor: "red"}}>Red</button>
      <button className="color" onClick={() => {setColor("blue")}} style={{backgroundColor: "blue"}}>blue</button>
      <button className="color" onClick={() => {setColor("green")}} style={{backgroundColor: "green"}}>green</button>
      <button className="color" onClick={() => {setColor("orange")}} style={{backgroundColor: "orange"}}>Orange</button>
      <button className="color" onClick={() => {setColor("olive")}} style={{backgroundColor: "olive"}}>olive</button>
    </div>
   </div>
  )
}

export default App
