import React, {useState} from "react";

function App() {
const [sathish, setSathish] = useState("");
const [heading, setHeading] = useState("");


function change(event){
 setSathish(event.target.value);
} 


function update(){
 setHeading(sathish);
 event.preventDefault();
 
}

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form>
      <input onChange={change} type="text" placeholder="What's your name?" value={sathish} />
      <button onClick={update}>Submit</button>
      </form>
    </div>
  );
}

export default App;
