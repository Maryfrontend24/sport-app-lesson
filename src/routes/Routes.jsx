import { Route, Routes } from 'react-router-dom'

import PageNotFound from '@/components/screens/not-found/PageNotFound.jsx'
import { useAuth } from '@/hooks/useAuth.js'
import { routes } from '@/routes/routes.data.js'

const RouterComponent = () => {
	const { isAuth } = useAuth()

	return (
		<Routes>
			{routes.map(route => {
				if (route.isAuth && !isAuth) {
					return null
				}

				const Component = route.component

				return <Route key={route.path} path={route.path} element={<Component />} />
			})}

			<Route path='*' element={<PageNotFound />} />
		</Routes>
	)
}

export default RouterComponent
