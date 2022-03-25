import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
  let [message, setMessage]=useState([
    {message:"message-1"},
    {message:"message-2"},
    {message:"message-3"},
  ])

  let [title, setTitle]=useState("")
  console.log(title)

  const addMessage = (title:string) => {
  let newMessage = {message:title}
    setMessage([newMessage,...message])
  }

  const callBackBtnHandler = ()=> {
addMessage(title)
    setTitle("")
  }

  return (
    <div className="App">
      <Input title={title}
      setTitle={setTitle}/>
      <Button name={"+"} callBack={callBackBtnHandler}/>

      {message.map((el, index)=>{
      return(
          <div key={index}>{el.message}</div>
      )
      })}
    </div>
  );
}

export default App;
