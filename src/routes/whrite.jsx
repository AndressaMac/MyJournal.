import { useEffect, useState } from 'react'

export default function Whrite() {
  const [postsValue, setPostsValue] = useState([])
  const [newPost, setNewPost] = useState('')

  function addPost(event) {
    setPostsValue([...postsValue, newPost])
    save([...postsValue, newPost])
    setNewPost('')
  }

  useEffect(() => {
    const posts = JSON.parse(sessionStorage.getItem('post'))
    setPostsValue(posts || [])
  }, [])

  function save(posts) {
    sessionStorage.setItem('post', JSON.stringify(posts))
  }


  return (
    <div className="journal">
      <div className="jounalText">
        <label className="labelText">Text:</label>
        <textarea onChange={e => setNewPost(e.target.value)} value={newPost} ></textarea>
        <button className="journalButton" onClick={addPost}>
          salvar
        </button>
      </div>
      {postsValue.map(post => (
        <div className="savePost">
          <p >{post}</p>
        </div>
      ))}
    </div>
  )
}
