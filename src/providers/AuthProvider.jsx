import Cookies from 'js-cookie'
import { createContext, useState } from 'react'

import { TOKEN } from '@/app.constants.js'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider

//
//
//
// сейчас «Выражение внутри useState(!!Cookies.get('TOKEN')) выполняется при каждом рендере»
//
// А не «состояние пересоздаётся».
//
// ✅ Lazy-init решает это
// useState(() => !!Cookies.get('TOKEN'))
//
// Теперь при рендере:
//
// 	React видит функцию
//
// вызывает её только при первом монтировании
//
// при следующих рендерах функция уже не вызывается
//
//
//

//
// Правильный AuthContext с учётом «протухшего» токена
// 1️⃣ Контекст хранит isAuth
//
//
//
// export const AuthContext = createContext(null)
//
// export const AuthProvider = ({ children }) => {
// 	const [isAuth, setIsAuth] = useState(() => !!Cookies.get('TOKEN'))
//
// 	// функция ручной проверки токена
// 	const checkAuth = () => {
// 		const token = Cookies.get('TOKEN')
// 		setIsAuth(!!token)
// 	}
//
// 	return (
// 		<AuthContext.Provider value={{ isAuth, setIsAuth, checkAuth }}>
// 			{children}
// 		</AuthContext.Provider>
// 	)
// }
//
// export const useAuth = () => useContext(AuthContext)
//
//
// import { Navigate } from 'react-router-dom'
// import { useAuth } from '@/hooks/useAuth'
// import { useEffect } from 'react'
//
// const ProtectedRoute = ({ children }) => {
// 	const { isAuth, checkAuth } = useAuth()
//
// 	// проверяем токен при входе на страницу
// 	useEffect(() => {
// 		checkAuth()
// 	}, [])
//
// 	if (!isAuth) {
// 		return <Navigate to="/auth" replace />
// 	}
//
// 	return children
// }
//
//
//
// Пользователь идёт на /profile
//         ↓
// ProtectedRoute читает Cookies.get('TOKEN')
//         ↓
// нет токена → redirect /auth
// есть токен → открываем страницу
//
//
//
//
//
// Что происходит
//
// При старте isAuth инициализируется из cookie
//
// При заходе на защищённую страницу checkAuth()
//
// Если токен протух → cookie нет → isAuth=false
//
// Router делает redirect
//
// ❗ Почему ESLint не ругается
//
// setState вызывается внутри функции по событию
//
// useEffect не зависит от isAuth
//
// нет циклических обновлений
//
// 💡 Плюс
//
// Ты теперь можешь вызывать checkAuth() где угодно:
//
// 	после ответа сервера 401
//
// после обновления токена
//
// после логаута
//
//
// Итог
//
// Контекст хранит флаг.
// 	Cookie — источник истины.
// 	Проверка вызывается там, где реально нужна.
