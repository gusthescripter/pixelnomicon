import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function PostItem({ post }) {
  const dispatch = useDispatch()

  return (
    <div>
      <h4>{post.title.rendered}</h4>
      <p>{post.excerpt.rendered}</p>
      <Link to={`/singlepost/${post.id}`}>view</Link>
      <Link to={`/editpost/${post.id}`}>edit</Link>
    </div>
  )
}

export default PostItem
