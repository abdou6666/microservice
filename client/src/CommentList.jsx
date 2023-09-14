const CommentList = ({comments}) => {
        
    const renderedComments = comments.map((comment) => {
        let content;
        if (comment.status === 'approved') {
            content = comment.content;
        }
        if (comment.status === 'pending') {
            content = 'This Content awaiting moderation';
        }
        if (comment.status === 'rejected') {
            content = 'This comment Has been rejected';
        }
        return (    
            <li key={comment.id}>
                
                {content}
            </li>
        )
    })
  return (
      <div>
          CommentList
          <ul>
              {renderedComments}
          </ul>
          
    </div> 
  )
}

export default CommentList