import Topbar from '../../topbar/Topbar';
import './Login.css'
import {
  Link 
} from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Topbar/>
      <div className="login">
        <span className="loginTitle"> Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input type="text" className='loginInput' placeholder='Enter your email'/>
          <label>Password</label>
          <input type="password" className='loginInput' placeholder='Enter your password...'/>
          <Link to='/login' className='loginBtn'>Login</Link>
        </form>
        <button className='loginRegisterBtn'>
          <Link to='/register'>Register</Link>
        </button>
      </div>
    </>
  )
}

export default Login