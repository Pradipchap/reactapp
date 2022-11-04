import React from "react";
import { useState } from "react";
import Buttons from "./buttons";
export default function InputText(props) {
  const [text, settext] = useState("");
  
const buttonColor=()=>{
  if(props.inputTextColor==='light')
  return 'info';
  else
  return 'secondary'
}
const noOfWords=()=>{
 let x=text.split(" ").length;
 if(text[text.length-1]===' ')
 return x=x-1;
 else if(text==='')
 x=x-1;
 else return x;

}
  const uppercase = () => {
    settext(text.toUpperCase());
  };
  const lowercase=()=>{
    settext(text.toLowerCase())
  }
  const changetext=(event)=>{
    settext(event.target.value);

  }
const copy=()=>{
  let x=text;
  navigator.clipboard.writeText(x);
}
  return (
    <div className="ml-3">
      <div className="form-group my-4">
        <label
          className={`text-${props.inputTextColor === "light" ? "dark" : "light"}`}
          htmlFor="exampleFormControlTextarea1"
          
        >
          Enter text to examine
        </label>
        <textarea
          className={`form-control text-${props.inputTextColor==="light"?'black':'white'} bg-${props.inputTextColor}`}
          
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
          onChange={changetext}
          color={props.inputTextColor==='light'?'black':'white'}
          placeholder='Write Something here'
        >
          
        </textarea>
      </div>
      <Buttons toggleUpper={uppercase} toggleLower={lowercase} toggleCopy={copy} color={buttonColor()} />

      <div className="ml-4">


<p className={`text-${props.inputTextColor === "light" ? "dark" : "light"}`}>

   {noOfWords()} words {text.length} characters
</p>




</div>
    </div>
  );
}
