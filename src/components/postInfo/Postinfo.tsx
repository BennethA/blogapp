import Topbar from '../topbar/Topbar'
import POST from '../posts/Posts.json'
import './Postinfo.css'

const Postinfo = () => {
  const post = JSON.stringify(POST)
  return (
    <>
      <Topbar/>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img src={post} alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">
            {post}
            <div className="singlePostEdit">
              <i className='singlePostIcon'>edit</i>
              <i className='singlePostIcon'>delete</i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Benneth</b></span>
            <span className='singlePostDate'>{post}</span>
          </div>
          <p className='singlePostDesc'>
            {post}
          </p>
        </div>
      </div>
    </>
  )
}

export default Postinfo