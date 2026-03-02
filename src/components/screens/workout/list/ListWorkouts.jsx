import styles from '../detail/Workout.module.scss'

import Layout from '@/components/layout/Layout.jsx'
import WorkoutItem from '@/components/screens/workout/list/WorkoutItem.jsx'
import { useWorkouts } from '@/components/screens/workout/list/useWorkouts.js'
import Alert from '@/components/ui/alert/Alert.jsx'
import Loader from '@/components/ui/loader/Loader.jsx'

const ListWorkouts = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
		useWorkouts()

	return (
		<>
			<Layout bgImage='/images/workout-bg.jpg' heading='Workout list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}
export default ListWorkouts
