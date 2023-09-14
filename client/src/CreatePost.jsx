import axios from "axios";
import { useState } from "react"

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:posts.com/posts/create', { title })
        setTitle('');
    }
  return (
      <div>
          <form onSubmit={onSubmit}>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control"/>
              <button type="submit" className="btn btn-primary">submit</button>
          </form>
    </div>
  )
}

export default CreatePost