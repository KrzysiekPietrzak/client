import React, { useEffect, useState } from "react"
import BookBio from "../component/BookBio"


function App(){
      
  const [data, setData] = useState([])

        const fetchData = async () => {
    const response = await fetch("https://serv4.onrender.com/books")
    console.log(await response.json())
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