
import './App.css'
import { useAppSelector } from './redux/hook'
import { selectPosts } from './redux/post/slice'

function App() {
  const posts = useAppSelector(selectPosts)

  return (
    <>
    </>
  )
}

export default App
