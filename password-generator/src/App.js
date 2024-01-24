import React, { useState, useCallback, useEffect, useRef } from "react";

import logo from "./logo.svg";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

//useRef Hook
  const passwordRef=useRef(null)
  const copyPasswordToClipboard=useCallback(()=>
  {passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)},
  [password])
  

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-=+{}[]~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //useEffect hook
  useEffect(()=>
  { passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator] )


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 ">
        <h2 className="text-3xl text-center text-white my-3">
          Password Generator
        </h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            typr="text"
            value={password}
            placeholder="password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard}  className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-1">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlfor="numberInput">number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlfor="charactersInput">characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
