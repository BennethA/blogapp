import Topbar from '../../topbar/Topbar'
import './Write.css'
import headerImg from '/src/assets/IMG_6233.jpg'

const Write = () => {
  return (
    <>
      <Topbar/>
      <div className="write">
        <img src={headerImg} alt="" className='writeImg'/>
        <form>
          <div className="writeFormGroupOne">
            <div>
              <label htmlFor="fileInput">
                <span className='writeIcon'>+</span>
              </label>
              <input type="file" id='fileInput'/>
              <input type="text" placeholder='Title' className='writeInput'autoFocus={true}/>
            </div>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder='Tell your story...' typeof='text' className='writeText'></textarea>
          </div>
          <button className="writeSubmit">
            Publish
          </button>
        </form>
      </div>
    </>
  )
}

export default Write