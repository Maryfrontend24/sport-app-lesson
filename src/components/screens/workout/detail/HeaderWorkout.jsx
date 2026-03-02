import cn from 'clsx'

import stylesLayout from '@/components/layout/Layout.module.scss'
import Header from '@/components/layout/header/Header.jsx'
import styles from '@/components/screens/workout/detail/Workout.module.scss'

const HeaderWorkout = ({ isSuccess, workoutLog }) => {
	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/home-bg.jpg')`,
					height: 356
				}}
			>
				<Header backLink='/workouts' />

				{workoutLog && (
					<div>
						<time className={styles.time}>{workoutLog.minute + ' min.'}</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
		</>
	)
}

export default HeaderWorkout
