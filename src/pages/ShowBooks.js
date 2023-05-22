import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from "react"
import BookBio from "../component/BookBio"


function App(){
      const params = useParams()
      
  const [data, setData] = useState([])

        const fetchData = async () => {
    const response = await fetch("http://localhost:1337/books")
    const dataBook = await response.json()
        setData(dataBook)

  }

  useEffect(() => {
    fetchData()
  }, [])

const bookInfo = () =>{
  return (
    data.map((data => <BookBio props={data} key={data.id}/>  ) )
  )
}


return(
<div>
{bookInfo()}
</div>
)}
export default App