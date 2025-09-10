import React from 'react'


import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import HeroBanner from './components/Herobanner/Herobanner'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
  
     <Navbar/>
<HeroBanner/>
     <Home/>
     <Footer/>
    </div>
  )
}

export default App