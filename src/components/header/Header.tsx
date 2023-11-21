import './Header.css'
import headerImg from '/src/assets/IMG_6233.jpg'

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <img src={headerImg} className='headerImg'/>
          <div className="headerTitleTexts">
            <span className="headerTitleSm">Welcome To</span>
            <span className="headerTitleLg">BLOG WORLD</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header