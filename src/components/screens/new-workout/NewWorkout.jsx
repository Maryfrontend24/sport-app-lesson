import { Link } from 'react-router-dom'

import Layout from '@/components/layout/Layout.jsx'
import SelectExercises from '@/components/screens/new-workout/SelectExercises.jsx'
import { useNewWorkout } from '@/components/screens/new-workout/useNewWorkout.js'
import Alert from '@/components/ui/alert/Alert.jsx'
import Button from '@/components/ui/button/Button.jsx'
import Field from '@/components/ui/field-form/Field.jsx'
import Loader from '@/components/ui/loader/Loader.jsx'

const NewWorkout = () => {
	const {
		control,
		errors,
		error,
		isSuccess,
		handleSubmit,
		isLoading,
		onSubmit,
		register
	} = useNewWorkout()

	return (
		<>
			<Layout bgImage='/images/new-workout-bg.jpg' heading='Create new workout' />
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>

					<SelectExercises control={control} />

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
