import axios from "axios";
import { useState } from "react"

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');
    const onCreateComment = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{content})
        setContent('');
    }
  return (
      <div>
          <form onSubmit={onCreateComment}>
              <div className="form-group">
                  <label>New Comment</label>
                  <input type="text" className="form-control"  value={content} onChange={e => setContent(e.target.value)}/>
              </div>
              <div>
                  <button className="btn btn-primary">submit</button>
              </div>
          </form>
    </div>
  )
}

export default CommentCreate