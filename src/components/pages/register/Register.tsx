import Topbar from '../../topbar/Topbar';
import './Register.css'
import {
  Link 
} from 'react-router-dom';

const Register = () => {
  return (
    <>
    <Topbar/>
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className='registerInput' placeholder='Enter username'/>
        <label>Email</label>
        <input type="text" className='registerInput' placeholder='Enter your email'/>
        <label>Password</label>
        <input type="password" className='registerInput' placeholder='Enter your password...'/>
        <button className='registerBtn'>Register</button>
      </form>
      <button className='registerLoginBtn'>
        <Link to='/login'>Login</Link>
      </button>
    </div>
    </>
  )
}

export default Register