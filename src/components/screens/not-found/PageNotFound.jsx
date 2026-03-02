import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '@/components/layout/Layout.jsx'
import { useAuth } from '@/hooks/useAuth.js'

const PageNotFound = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth')
		}
	}, [])
	return (
		<>
			<Layout heading='Page not found'></Layout>
			<div className='wrapper-inner-page'>404 page not found</div>
		</>
	)
}
export default PageNotFound
