import './App.css'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Write from './components/pages/write/Write'
import Postssection from './components/blogPage/Postssection'
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import Postinfo from './components/postInfo/Postinfo'
import Contactpage from './components/contactPage/Contact'
import Settings from './components/pages/settings/Settings'
import Postinfp from './components/postInfo/Postinfo'

function App() {
  const user = true

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Postssection/>}/>
          <Route path='/register' element={ user ? <Postssection/> : <Register/>}/>
          <Route path='/login' element={ user ? <Postssection/> : <Login/>}/>
          <Route path='/write' element={ user ? <Write/> : <Register/>}/>
          <Route path='/settings' element={ user ? <Settings/> : <Register/>}/>
          <Route path='/postinfo' element={ user ? <Postinfo/> : <p className='singlepostRegBef'>Sorry <br/> Login / Register before</p>}/>
          <Route path='/contactpage' element={<Contactpage/>}/>
          <Route path='/singlepost/:id' element={<Postinfp/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App