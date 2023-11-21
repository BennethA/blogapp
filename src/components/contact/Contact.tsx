import Topbar from '../topbar/Topbar'
import './Contact.css'


const Contact = () => {
  return (
    <>
      <Topbar/>
      <div className="contact">
        <div className="contactUs">
          <div className="contactUsDesc">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quia necessitatibus perferendis ipsum perspiciatis accusamus iste sequi id, quibusdam facilis, eum hic sint excepturi. Enim doloremque molestiae earum impedit cupiditate?
            </p>
          </div>
          <div className="contactUsForm">
            <div className="contactUsFormOne">
              <span>
                <label>First Name:</label>
                <br />
                <input type="text" placeholder='First Name'/>
              </span>
              <span>
                <label>Second Name:</label>
                <br />
                <input type="text" placeholder='Last Name'/>
              </span>
            </div>
            <div className="contactUsFormTwo">
              <label>Email:</label>
              <br />
              <input type="text" placeholder='Email'/>
            </div>
            <div className="contactUsFormThree">
              <label>What can we help you with?</label>
              <br />
              <input type='text'/>
            </div>
            <button>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact