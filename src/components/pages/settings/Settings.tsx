import Topbar from '../../topbar/Topbar'
import './Settings.css'
import PROFILE from '/src/assets/profilepic.jpg'

const Settings = () => {
  return (
    <>
      <Topbar/> 
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">
              Update your acccount
            </span>
            <span className="settingsDeleteTitle">
              Delete acccount
            </span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsProfilePicture">
              <img src={PROFILE} alt="" />
              <label htmlFor="fileInput">
                <span className="settingsProfilePictureIcon">
                  +
                </span>
              </label>
              <input type="file" id='fileInput' style={{display: 'none'}}/>
            </div>
            <label>Username</label>
            <input type="text"/>
            <label>Email</label>
            <input type="email"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Settings