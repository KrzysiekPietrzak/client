import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ShowBook from './pages/ShowBook'
import ShowBooks from './pages/ShowBooks'
import Register from './pages/Register'
import AddBook from './pages/AddBook'
import Dashboard from './pages/Dashboard'
import MyBooks from './pages/MyBooks'


const App =()=>{
    return <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/addbook" exact element={<AddBook />}></Route>
        <Route path="/book/:id" exact element={<ShowBook />}></Route>
        <Route path="/books/" exact element={<ShowBooks />}></Route>
        <Route path="/dashboard/" exact element={<Dashboard />}></Route>
        <Route path="/myBooks/:id" exact element={<MyBooks />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
}

export default App