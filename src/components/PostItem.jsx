import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function PostItem({ post }) {
  const dispatch = useDispatch()

  return (
    <div>
      <h4>{post.title.rendered}</h4>
      <p>{post.excerpt.rendered}</p>
      <Link to={`/singlepost/${post.id}`}>info</Link>
    </div>
  )
}

export default PostItem
