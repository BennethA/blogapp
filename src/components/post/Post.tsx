import './Post.css'
import POST from './Post.json'
import {
  Link 
} from 'react-router-dom';

const Post = () => {
  return (
    <>
      {POST.map(post => {
        return (
          <Link to='/singlepost' key={post.id}>
            <div className="post">
              <img className='postImg' src={post.images} alt="" />
              <div className="postInfo">
                <div className="postTitle">
                  {post.postTitle}
                </div>
                <span className="postDate">{post.postDate}</span>
              </div>
              <p className='postDesc'>
                {post.postDesc}
              </p>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default Post