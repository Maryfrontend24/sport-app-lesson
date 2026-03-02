// import { useMutation } from '@tanstack/react-query'
// import { useForm } from 'react-hook-form'
//
// import ExerciseService from '@/services/exercise/exercise.service.js'
//
// // const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']
//
// export const useNewExercise = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 		reset,
// 		control
// 	} = useForm({
// 		mode: 'onChange'
// 	})
//
// 	const { isPending, mutate, error, isSuccess } = useMutation({
// 		mutationKey: ['create exercise'],
// 		mutationFn: body => ExerciseService.create(body),
// 		onSuccess: () => {
// 			reset()
// 		}
// 	})
// 	const onSubmit = data => {
// 		mutate(data)
// 	}
//
// 	return {
// 		register,
// 		handleSubmit,
// 		errors,
// 		control,
// 		isSuccess,
// 		error,
// 		mutate,
// 		isLoading: isPending,
// 		onSubmit
// 	}
// }
