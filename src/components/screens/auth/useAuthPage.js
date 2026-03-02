import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth.js'
import AuthService from '@/services/auth.service.js'

export const useAuthPage = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ mode: 'onChange' })

	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [isAuth, navigate])

	const { mutate, isPending } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) => AuthService.main(email, password, type),

		onSuccess: () => {
			setIsAuth(true)
			reset()
		}

		// onSuccess: data => {
		// 	console.log('AUTH SUCCESS:', data)
		// 	setIsAuth(true)
		// 	reset()
		// }
	})

	const onSubmit = data => mutate(data)

	return {
		setType,
		register,
		handleSubmit,
		errors,
		isLoading: isPending,
		onSubmit
	}
}
