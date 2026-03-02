import { useNavigate } from 'react-router-dom'

import Layout from '../../layout/Layout.jsx'

import styles from './Home.module.scss'
import Statistics from '@/components/screens/Profile/statistics/Statistics.jsx'
import Button from '@/components/ui/button/Button.jsx'
import { useAuth } from '@/hooks/useAuth.js'

function Home() {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>Exercises for the shoulders</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
