import { useState } from 'react';

function App() {

  const [title,setTitle]=useState('');
  const [Author,setAuthor]=useState('');
  const [id,setId]=useState('');

  async function newBook(event){
    event.preventDefault()
    const response = await fetch('https://serv4.onrender.com/api/addbook',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        title,
        Author,
        id,
      })
    })
  }
  return (
    <div className="App">
     <h1>Add Book</h1>
     <form onSubmit={newBook}>
      <input 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      type="text"
      placeholder='Title'
      />
      <input 
      value={Author}
      onChange={(e)=>setAuthor(e.target.value)}
      type="text"
      placeholder='Author'
      />
      <input 
      value={id}
      onChange={(e)=>setId(e.target.value)}
      type="Number"
      placeholder='id'
      />
      <br />
<input type ="submit" value="Add Book"/>
     </form>
    </div>
  );
}

export default App;
