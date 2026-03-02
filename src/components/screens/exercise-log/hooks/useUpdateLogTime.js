import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { useCompleteLog } from './useCompleteLog'
import ExerciseLogService from '@/services/exercise/exercise-log.service.js'

export const useUpdateLogTime = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { completeLog, errorCompleted } = useCompleteLog()

	const { mutate, error: errorChange } = useMutation({
		mutationKey: ['update log time', id],
		mutationFn: ({ timeId, body }) => ExerciseLogService.updateTime(timeId, body),
		onSuccess: async () => {
			await queryClient.invalidateQueries(['get exercise log', id])

			const data = queryClient.getQueryData(['get exercise log', id])

			const completedCount = data?.times?.filter(t => t.isCompleted).length ?? 0

			if (completedCount === data?.times?.length) {
				completeLog({ isCompleted: true })
			}
		}
	})

	return { updateTime: mutate, error: errorChange || errorCompleted }
}
