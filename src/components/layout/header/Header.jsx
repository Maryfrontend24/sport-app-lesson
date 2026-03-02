import { CiUser } from 'react-icons/ci'
import { GoArrowLeft } from 'react-icons/go'
import { useLocation, useNavigate } from 'react-router-dom'

import Hamburger from '../humburger/Humburger.jsx'

import styles from './Header.module.scss'
import { useAuth } from '@/hooks/useAuth.js'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	if (!isAuth) return null

	return (
		<header className={styles.header}>
			{pathname !== '/' || (!isAuth && pathname !== '/auth') ? (
				<button
					onClick={() => {
						navigate(isAuth ? backLink : '/auth')
					}}
				>
					<GoArrowLeft fill='#fff' fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<CiUser fill='#fff' stroke='#fff' fontSize={28} />
				</button>
			)}

			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
