import React from 'react'
import { Navbar } from '../../components';
import Home from '../home/Home';

const MainPage = () =>  {
  return (
    <div style={{margin: 0}}>
        <Navbar/>
        <Home/>
    </div>
  )
}

export default MainPage;