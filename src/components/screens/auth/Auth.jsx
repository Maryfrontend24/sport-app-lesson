import Loader from 'src/components/ui/loader/Loader.jsx'

import styles from './Auth.module.scss'
import Layout from '@/components/layout/Layout.jsx'
import { useAuthPage } from '@/components/screens/auth/useAuthPage.js'
import Button from '@/components/ui/button/Button.jsx'
import Field from '@/components/ui/field-form/Field.jsx'

// const Auth = () => {
// 	const [email, setEmail] = useState('')
//
// 	return (
// 		<Layout heading='Sign in' bgImage='images/auth-bg.png'>
// 			<div className='wrapper-inner-page'>
// 				<input
// 					type='text'
// 					placeholder='Enter email'
// 					value={email}
// 					onChange={e => setEmail(e.target.value)}
// 				></input>
// 			</div>
// 		</Layout>
// 	)
// }
// export default Auth
//

// const Auth = () => {
// 	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
// 		useAuthPage()
//
// 	return (
// 		<>
// 			<Layout heading='Sign in' bgImage='images/auth-bg.png' />
// 			<div className='wrapper-inner-page'>
// 				{isLoading && <Loader />}
// 				<form onSubmit={handleSubmit(onSubmit)}>
// 					<Field
// 						error={errors?.email?.message}
// 						name='email'
// 						type='text'
// 						register={register}
// 						options={{
// 							required: 'Email is required',
// 							pattern: {
// 								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
// 								message: 'Invalid email address'
// 							}
// 						}}
// 						placeholder='Enter email'
// 					/>
// 					<Field
// 						error={errors?.password?.message}
// 						name='password'
// 						type='password'
// 						register={register}
// 						options={{
// 							required: 'Password is required',
// 							minLength: {
// 								value: 8,
// 								message: 'Password must be at least 8 characters'
// 							}
// 						}}
// 						placeholder='Enter password'
// 					/>
// 					<div className={styles.wrapperButtons}>
// 						<Button clickHandler={() => setType('login')}> Sign In</Button>
// 						<Button clickHandler={() => setType('register')}> Sign Up </Button>
// 					</div>
// 				</form>
// 			</div>
// 		</>
// 	)
// }
// export default Auth

const Auth = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
		useAuthPage()

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Enter email'
					/>

					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}
export default Auth
