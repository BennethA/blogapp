import { useState } from 'react'
import Topbar from '../../topbar/Topbar'
import './Write.css'
import headerImg from '/src/assets/IMG_6233.jpg'
import POST from '/Users/addob/OneDrive/Desktop/reactblogapp/src/components/post/Post.json'


const Write = () => {
  const [id, setId] = useState(Math.random())
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [desc, setDesc] = useState('')
  let newItem = {}
  
  let newItemNew = JSON.parse(localStorage.getItem('newItem'))

  if (newItemNew) {
    newItem = newItemNew;
  }

  function addNewBlog (e) {
    e.preventDefault()
    let newItem = {
      "id": `${id}`,
      "images": ``,
      "postTitle": `${title}`,
      "postDate": `${date}`,
      "postDesc": `${desc}`
    }
    POST.push(newItem)
    render()
  }
  
  function render () {
    setTitle('')
    setDesc('')
    
    localStorage.setItem('newItem', JSON.stringify(newItem))
  }
  
  const newTitle = (e) => {
    setTitle(e.target.value)
  }
  
  const newDate = (e) => {
    setDate(e.target.value)
  }
  
  const newDesc = (e) => {
    setDesc(e.target.value)
  }
  return (
    <>
      <Topbar/>
      <div className="write">
        <form action='' >
          <img src='' alt=""  className='writeImg'/>
          <input type="file" className='chooseImg'/>
        </form>
        <form>
          <input type="text" placeholder='Title' value={title} onChange={newTitle} id='title' className='writeInput' autoFocus={true}/>
          <input type="date" className='date' onChange={newDate} />
          <textarea placeholder='Tell your story...' onChange={newDesc} value={desc} typeof='text' className='writeText' />
          <button className="writeSubmit" onClick={addNewBlog}>
            Publish
          </button>
        </form>  
      </div>
    </>
  )
}

export default Write