import React, { useEffect, useState } from 'react'
import './Home.css'
import Post from '../../post/Post'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import axios from 'axios'

const Home = () => {

  return (
    <>
    <Header/>
      <div className="home">
        <Post/>
        <Sidebar/>
      </div>
    </>
  )
}

export default Home