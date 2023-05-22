import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Login =()=> {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const navigate = useNavigate();

  

  async function loginUser(event){
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/login',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        password,
      })
    })
    const data = await response.json()
  console.log(data.status)

  if (data.status==="ok") {
  setauthenticated(true)
  localStorage.setItem("authenticated", true);
  localStorage.setItem("_id", data.user);
  if (!authenticated) {
 return  navigate("/dashboard");
}
  }

  }


 
  return (
    <div className="App">
     <h1>Login</h1>
     <form onSubmit={loginUser}>
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

export default Login;
