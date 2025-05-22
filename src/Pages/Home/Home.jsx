import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full py-7 px-10">
        
            <NavBar/>
            <Outlet></Outlet>

        
    </div>
  )
}

export default Home