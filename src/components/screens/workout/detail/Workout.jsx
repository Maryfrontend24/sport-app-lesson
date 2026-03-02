import { useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import styles from './Workout.module.scss'
import ExerciseItem from '@/components/screens/workout/detail/ExerciseItem.jsx'
import HeaderWorkout from '@/components/screens/workout/detail/HeaderWorkout.jsx'
import Loader from '@/components/ui/loader/Loader.jsx'
import workoutLogService from '@/services/workout/workout-log.service.js'

const Workout = () => {
	const { id } = useParams()
	// workoutLog тут берем

	// const [logId, setLogId] = useState(null)
	//
	// const { mutate: createWorkoutLog } = useMutation({
	// 	mutationFn: workoutId => workoutLogService.create(workoutId),
	//
	// 	onSuccess: ({ data }) => {
	// 		setLogId(data.id)
	// 	}
	// })
	//
	// useEffect(() => {
	// 	if (!id) return
	//
	// 	createWorkoutLog(Number(id))
	// }, [id])

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get workout log', id],
		queryFn: () => workoutLogService.getById(id),
		enabled: !!id,
		select: ({ data }) => data
	})

	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 && index !== workoutLog.exerciseLogs.length - 1 && (
									<div className={styles.line} />
								)}
							</Fragment>
						))}
					</div>
				)}
			</div>
		</>
	)
}
export default Workout
