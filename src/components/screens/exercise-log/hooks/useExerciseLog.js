import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useUpdateLogTime } from '@/components/screens/exercise-log/hooks/useUpdateLogTime.js'
import ExerciseLogService from '@/services/exercise/exercise-log.service.js'

export const useExerciseLog = () => {
	const { id } = useParams()

	const [times, setTimes] = useState([])
	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
		select: ({ data }) => data
		// onSuccess(data) {
		// 	if (data?.times?.length) setTimes(data.times)
		// }
	})
	useEffect(() => {
		if (exerciseLog?.times) {
			setTimes(exerciseLog.times)
		}
	}, [exerciseLog])
	const { error, updateTime } = useUpdateLogTime(times)

	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})

		setTimes(newTimes)
	}

	const getTime = timeId => {
		return times.find(time => time.id === timeId)
	}

	const getState = (timeId, key) => {
		const time = getTime(timeId)
		return time ? time[key] : key === 'isCompleted' ? false : 0
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)
		updateTime({
			timeId,
			body: {
				isCompleted,
				weight: +time.weight,
				repeat: +time.repeat
			}
		})
	}
	console.log('exerciseLog 👉', exerciseLog)
	console.log('times state 👉', times)

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleTime,
		error,
		onChangeState,
		getState
	}
}
