import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import NavBar from './NavBar'

function Header() {

	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'>Pixel</Link>
			</div>
			<NavBar />
		</header>
	)
}

export default Header
