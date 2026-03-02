import ExerciseError from './ExerciseError'
import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import { useExerciseLog } from './hooks/useExerciseLog'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'
import Alert from '@/components/ui/alert/Alert.jsx'
import Loader from '@/components/ui/loader/Loader.jsx'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isLoading,
		times,
		isSuccess,
		error,
		getState,
		onChangeState,
		toggleTime
	} = useExerciseLog()

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map(item => (
							<TableRow
								getState={getState}
								onChangeState={onChangeState}
								toggleTime={toggleTime}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
