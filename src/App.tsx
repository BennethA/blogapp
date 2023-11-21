import './App.css'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Write from './components/pages/write/Write'
import Posts from './components/posts/Posts'
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import Singlepost from './components/singlepost/Singlepost'
import Contact from './components/contact/Contact'
import Settings from './components/pages/settings/Settings'

function App() {
  const user = true

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Posts/>}/>
          <Route path='/register' element={ user ? <Posts/> : <Register/>}/>
          <Route path='/login' element={ user ? <Posts/> : <Login/>}/>
          <Route path='/write' element={ user ? <Write/> : <Register/>}/>
          <Route path='/settings' element={ user ? <Settings/> : <Register/>}/>
          <Route path='/singlepost' element={ user ? <Singlepost/> : <p className='singlepostRegBef'>Sorry <br/> Login / Register before</p>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App