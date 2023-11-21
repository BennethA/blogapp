import Topbar from '../topbar/Topbar'
import './Singlepost.css'
import headerImg from '/src/assets/IMG_6233.jpg'

const Singlepost = () => {
  return (
    <>
      <Topbar/>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img src={headerImg} alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
              <i className='singlePostIcon'>edit</i>
              <i className='singlePostIcon'>delete</i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Benneth</b></span>
            <span className='singlePostDate'>1hr ago</span>
          </div>
          <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt quisquam eum fugit consequuntur ipsam explicabo magnam voluptas autem. Ullam fugiat amet illum, voluptates sequi sed fuga minus voluptatibus quaerat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt quisquam eum fugit consequuntur ipsam explicabo magnam voluptas autem. Ullam fugiat amet illum, voluptates sequi sed fuga minus voluptatibus quaerat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt quisquam eum fugit consequuntur ipsam explicabo magnam voluptas autem. Ullam fugiat amet illum, voluptates sequi sed fuga minus voluptatibus quaerat!
          </p>
        </div>
      </div>
    </>
  )
}

export default Singlepost