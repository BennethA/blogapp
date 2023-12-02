import './Postssection.css'
import Post from '../posts/Posts.tsx'
import Header from '../header/Header'
import Topbar from '../topbar/Topbar'

const Posts = () => {
  return (
    <>
      <Topbar/>
      <Header/>
      <h1>BLOGS</h1>
      <div className="posts">
        <Post/>
      </div>
    </>
  )
}

export default Posts