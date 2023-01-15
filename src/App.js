import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
const [name,setName] = useState("");

const addName = () =>{
  console.log("started");
  Axios.post("http://localhost:3001/create",{
    name: name,
  }).then(()=>{
    console.log("Succ");
  }
  );
};


  return (
    <div className="App">
<label>Name:</label>
<input type="text" 
onChange={(event)=>{
  setName(event.target.value);
  
}}/>
<hr />
<button onClick={addName}> Add</button>
    </div>
  );
}

export default App;
