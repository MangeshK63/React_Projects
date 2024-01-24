import React, { useState } from "react";
import "./App.css";

function App() {
  // let [counter, setCounter]=useState(15)
  // let AddValue=()=>{
  //   console.log("add value : ", {counter} );
  //   setCounter(counter + 1);
  // }

  // let removeValue=()=>{
  //   setCounter(counter-1);
  // }

  const [color, setcolor] = useState("olive");

  return (
    <>
      {/* <h1>Value is increased by :{counter}</h1>
    <button onClick={AddValue} >Add </button>
    <button onClick={removeValue} >Remove : {counter} </button> */}
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
      <div className=" text-center text-2xl font-bold tracking-tight text-white sm:text-4xl px-23" style={{padding:"100px", fontSize:"40px"}} >
      <h1  >Introducing the Ultimate Color Changer for a Vibrant Life!</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white" 
            style={{backgroundColor:"green"}} 
            onClick={()=>setcolor("green")}>green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white" 
            style={{backgroundColor:"black"}}
            onClick={()=>setcolor("black")} >black</button>
            <button className="outline-none px-4 py-1 rounded-full text-white" 
            style={{backgroundColor:"yellow"}} 
            onClick={()=>setcolor("yellow")}>yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-white" 
            style={{backgroundColor:"red"}} 
            onClick={()=>setcolor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white" 
            style={{backgroundColor:"blue"}} 
            onClick={()=>setcolor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white" 
            style={{backgroundColor:"pink"}} 
            onClick={()=>setcolor("pink")}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white" 
            style={{backgroundColor:"purple"}} 
            onClick={()=>setcolor("purple")}>purple</button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
