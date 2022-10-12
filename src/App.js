import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'
import Posts from './pages/Posts'
import SinglePost from './pages/SinglePost'
import EditPost from './pages/EditPost'

function App() {
  return (
  <>
  <Router>
    <div>
      <h1>Pixelnomicon</h1>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/singlepost/:id' element={<SinglePost />} />
        <Route path='/editpost/:id' element={<EditPost />} />
      </Routes>
    </div>
  </Router>
  <ToastContainer />
  </>
  );
}

export default App;
