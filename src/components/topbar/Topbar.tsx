import  './Topbar.css'
import SEARCH from '/src/assets/search.png'
import PROFILE from '/src/assets/profilepic.jpg'

import {
  Link 
} from 'react-router-dom';

const Topbar = () => {
  const user = true
  return (
    <>
      <div className="top">
        <div className="topLeft">
          {
            user ? (
              <Link to='/settings'>
                <div className='profilePic'>
                  <img className='profileImg' src={PROFILE} alt="" />
                </div>
              </Link>
               ): ' '
          }
          <p>BLOGiLY</p>
        </div>
        <div  className='topCenter'>
          <ul>
            <Link to='/' className='link'>
              <li>Home</li>
            </Link>
            <Link to='/write' className='link'>
              <li>Write</li>
            </Link>
            {
              user ? 
              <Link to='/contact' className='link'>
                <li>Contact</li>
              </Link> : (
                <>
                
                </>
              )
            }
            
          </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <div>
                <div className="input">
                  <input type="text" placeholder='Search'/>
                </div>
                <a className='searchLink'>
                  <img src={SEARCH} alt="" />
                </a>
              </div> 
              ): (
                <div className="topCenter">  
                  <ul>
                    <li>
                      <Link to='/login' className='link'>Login</Link>
                    </li>
                    <li>
                      <Link to='/register' className='link'>Register</Link>
                    </li>
                  </ul>
                </div>
            )
          }
        </div>
      </div>
    </>
   )
}


export default Topbar