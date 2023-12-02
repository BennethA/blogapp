import './Posts.css'
import POSTS from './Posts.json'
import {
  Link 
} from 'react-router-dom';

const Post = () => {
  return (
    <>
      {POSTS.map(post => {
        return (
          <div className="post" key={post.id}>
            <Link to='/singlepost/:id'>
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
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Post