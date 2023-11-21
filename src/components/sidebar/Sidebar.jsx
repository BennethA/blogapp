import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src='' alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ab dignissimos nemo assumenda ullam rerum!
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <img className='sidebarIcon' src='' alt="" />
            <img className='sidebarIcon' src='' alt="" />
            <img className='sidebarIcon' src='' alt="" />
            <img className='sidebarIcon' src='' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar