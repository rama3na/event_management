import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/usersapp/NavigationBar';
 import Footer from './components/usersapp/Footer';
function RootLayout() { 
  return (
    <div>
     <div>
    <NavigationBar />
    </div>
    <div>
    <Outlet/>
    </div>
    <div >
    <Footer  style={{minHeight:'100vh'}} />
    </div>
    
    </div>
  )
} 
export default RootLayout