import { useDispatch } from 'react-redux'

function PostItem({ post }) {
  const dispatch = useDispatch()

  return (
    <div>
      <h4>{post.title.rendered}</h4>
      <p>{post.excerpt.rendered}</p>
    </div>
  )
}

export default PostItem
