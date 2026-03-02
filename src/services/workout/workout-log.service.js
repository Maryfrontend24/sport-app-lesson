import { WORKOUTS } from './workout.service'
import { $axios } from '@/api.js'

const LOG = `${WORKOUTS}/log`

// const LOG = `${WORKOUTS}/log`
//
// class WorkoutLogService {
// 	async getById(id) {
// 		const { data } = await $axios.get(`${LOG}/${id}`)
// 		return data
// 	}
//
// 	async create(workoutId) {
// 		const { data } = await $axios.post(`${LOG}/${workoutId}`)
// 		return data
// 	}
//
// 	async complete(id) {
// 		const { data } = await $axios.patch(`${LOG}/complete/${id}`)
// 		return data
// 	}
// }
//

class WorkoutLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}

	async create(workoutId) {
		return $axios.post(`${LOG}/${workoutId}`)
	}

	async complete(id) {
		return $axios.patch(`${LOG}/complete/${id}`)
	}
}
export default new WorkoutLogService()
