import './Posts.css'
import Post from '../post/Post'
import Header from '../header/Header'
import Topbar from '../topbar/Topbar'

const Posts = () => {
  return (
    <>
      <Topbar/>
      <Header/>
      <h1>POSTS</h1>
      <div className="posts">
        <Post/>
      </div>
    </>
  )
}

export default Posts