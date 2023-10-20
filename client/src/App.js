import React from 'react'
import Header from './Header/Header1';
import NavigateComp from './Navigation/NavigateComp';
import './App.css';
import Footer from './ProductLayout/Footer';
function App() {
  return (
    <div className='App'>
   <div className=' h-100'> <Header/>
    <NavigateComp/>
    </div>
    <div className='mt-5' ><Footer/></div>
    </div>
  )
}

export default App





