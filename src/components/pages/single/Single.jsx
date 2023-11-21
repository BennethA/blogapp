import Sidebar from '../../sidebar/Sidebar'
import Singlepost from '../../singlepost/Singlepost'
import './Single.css'

const Single = () => {
  return (
    <>
      <div className="single">
        <Singlepost/>
        <Sidebar/>
      </div>
    </>
  )
}

export default Single