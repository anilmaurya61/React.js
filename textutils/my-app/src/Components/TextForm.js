import React, { useState } from 'react'
import './Index.css'
export default function TextForm() {
  const handleremoveText =()=>{
    let str=text.replace(/\s+/g, ' ').trim();
    setText(str);
  }
  const handleCopyText =()=>{
    let copytext = document.getElementById("exampleFormControlTextarea1")
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    setcText("Text Copied");
  }
  function previewOut(){
    let s=text1.length;
    if(s === 0)
      return "0";
    else{
      return text1.split(' ').length;
    }
  }
  const withoutspaces =()=>{
    let cnt=0;
    for(let i=0;i<text.length;i++){
      if(text1[i]==' '){
        cnt++;
      }
    }
    return text1.length - cnt;
  }
  const handleOnclick =()=>{
    let str = "Enter text Here"
    if(text !== str){
      setText('');
    }
    setcText("Copy Text");
  }
  const changeUPtext = () =>{
    let newtext = text.toUpperCase();
    setText1(newtext);
  }

  const changeLotext =()=>{
    let newtext=text.toLowerCase();
    setText1(newtext);
  }
  const clearText =()=>{
    setText1('');
    setText("Enter text Here");
  }
  const handleonchange = (event) =>{
    setText(event.target.value);
    setText1(event.target.value);
  }
  const [text,setText] = useState("Enter text Here");
  const [text1,setText1] = useState('');
  const [cText,setcText] = useState("Copy Text");
  return (
    <div className="mb-3 textform">
      <label for="exampleFormControlTextarea1" className="form-label texttitle">Enter the text to analyze below</label>
      <textarea className="form-control" value={text} onChange={handleonchange} onClick={handleOnclick} id="exampleFormControlTextarea1" rows="6"></textarea>
      <button type="button" class="btn btn-primary my-2" onClick={changeUPtext}>Convert to Uppercase</button>
      <button type="button" class="btn btn-primary my-2 mx-2" onClick={changeLotext}>Convert to Lowercase</button>
      <button type="button" class="btn btn-primary my-2" onClick={clearText}>Clear Text</button>
      <button type="button" class="btn btn-primary my-2 mx-2" onClick={handleremoveText}>Remove Extra Space</button>
      <button type="button" class="btn btn-primary my-2" onClick={handleCopyText}>{cText}</button>
      <p>Number of characters (including spaces): {text1.length}</p>
      <p>Number of characters (without spaces): {withoutspaces()}</p>
      <p>Number of Words: {previewOut()}</p>
      <p>Number of sentences: {text.split('.').length-1}</p>
      <h3>Preview</h3>
      <p>{text1}</p>
    </div>
  )
}
