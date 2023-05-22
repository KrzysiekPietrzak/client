import { useState } from 'react';

function App() {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function registerUser(event){
    event.preventDefault()
    const response = await fetch('https://serv4.onrender.com/api/register',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        password,
      })
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <div className="App">
     <h1>Register</h1>
     <form onSubmit={registerUser}>
      <input 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      type="text"
      placeholder='Name'
      />
      <input 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      type="email"
      placeholder='Name'
      />
      <input 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      type="password"
      placeholder='Password'
      />
      <br />
<input type ="submit" value="Register"/>
     </form>
    </div>
  );
}

export default App;
