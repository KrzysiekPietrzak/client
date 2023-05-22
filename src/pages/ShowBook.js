import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from "react"


function App(){
      const params = useParams()
      
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])

  const fetchData = () => {
    fetch("http://localhost:1337/book/"+params.id)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
  }

  useEffect(() => {
  fetchData()
}, [])



  const fetchData2 = () => {
    console.log(localStorage.getItem("_id"));
    fetch("http://localhost:1337/userinfo/"+localStorage.getItem("_id"))
      .then(response => {
        return response.json()
      })
      .then(data2 => {
        setData2(data2)
      })
  }


  useEffect(() => {
  fetchData2()
}, []);

  

  function bookInfo(){
    return(
        <div>
            <h1>Author:{data.Author}</h1>
            <h1>Title:{data.title}</h1>

        </div>
    )
  }
  function bookInfo2(){
    return(
        <div>
         <h2>you are user {data2.name}</h2>
           

        </div>
    )
  }



    return(
<div>
  {bookInfo2()}
    <h2>Book {params.id}</h2>
  {bookInfo()}
</div>
)}
export default App