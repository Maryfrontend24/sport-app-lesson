import Profile from '@/components/screens/Profile/Profile.jsx'
import Auth from '@/components/screens/auth/Auth.jsx'
import ExerciseLog from '@/components/screens/exercise-log/ExerciseLog.jsx'
import Home from '@/components/screens/home/Home.jsx'
import NewExercise from '@/components/screens/new-exercise/NewExercise.jsx'
import NewWorkout from '@/components/screens/new-workout/NewWorkout.jsx'
import Workout from '@/components/screens/workout/detail/Workout.jsx'
import ListWorkouts from '@/components/screens/workout/list/ListWorkouts.jsx'

export const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	},

	{
		path: '/workout/:id',
		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		isAuth: true
	},
	{
		path: '/exercise/:id',
		component: ExerciseLog,
		isAuth: true
	}
]
