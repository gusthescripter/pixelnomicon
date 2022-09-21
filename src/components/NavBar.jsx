import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'


function NavBar() {
	const [showMenu, setShowMenu] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {user} = useSelector((state) => state.auth)
	
	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/')
	}
	
	return (
		<header>
			<div>
				
				<nav className="relative container mx-auto p-6">
				
				<div className="flex items-center justify-between">
					
					<div className="pt-2">
						<img src="https://www.shareicon.net/data/512x512/2016/11/14/852179_code_512x512.png" width="50px" alt="" />
					</div>
					
					<div className="hidden md:flex space-x-4">
						<NavLink to='/'>
							Home
						</NavLink>
						<NavLink to='/Posts'>
							Posts
						</NavLink>
						<NavLink to='/Account'>
							Account
						</NavLink>
						{user ? (
							<button className='btn' onClick={onLogout}>
								<FaSignOutAlt /> Logout
							</button>
						) : (<>
							<Link to='/login'>
								<FaSignInAlt /> Login
							</Link>
							<Link to='/register'>
								<FaUser /> Register
							</Link>
						</>)}
					</div>
					
					<button id="menu-btn" className={`${showMenu && "open"} block hamburger md:hidden focus:outline-none`} onClick={() => setShowMenu(!showMenu)}>
						<span className="hamburger-top"></span>
						<span className="hamburger-middle"></span>
						<span className="hamburger-bottom"></span>
					</button>
					
				</div>
				<div className="md:hidden">
					<div id="menu" className={`${!showMenu && "hidden"} absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
						<NavLink to='/'>
							Home
						</NavLink>
						<NavLink to='/Posts'>
							Posts
						</NavLink>
						<NavLink to='/Account'>
							Account
						</NavLink>
						<NavLink to='/about'>
							About
						</NavLink>
					</div>
				</div>
				</nav>
			</div>
		</header>
	)
}

export default NavBar
