import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import WorkoutService from '@/services/workout/workout.service.js'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isPending, mutate, error, isSuccess } = useMutation({
		mutationKey: ['create workout'],
		mutationFn: body => WorkoutService.create(body),
		onSuccess: () => {
			reset({
				name: '',
				exerciseIds: []
			})
		}
	})
	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
	}

	return {
		register,
		handleSubmit,
		errors,
		control,
		isSuccess,
		error,
		mutate,
		isLoading: isPending,
		onSubmit
	}
}
