import { $axios } from '@/api.js'

export const WORKOUTS = '/workouts'

class WorkoutService {
	async getAll() {
		return $axios.get(WORKOUTS)
	}

	async getById(id) {
		return $axios.get(`${WORKOUTS}/${id}`)
	}

	// name, exerciseIds
	async create(body) {
		return $axios.post(WORKOUTS, body)
	}

	async update(id, body) {
		return $axios.put(`${WORKOUTS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${WORKOUTS}/${id}`)
	}
}

export default new WorkoutService()

// class WorkoutService {
// 	async getAll() {
// 		const { data } = await $axios.get(WORKOUTS)
// 		return data
// 	}
//
// 	async getById(id) {
// 		const { data } = await $axios.get(`${WORKOUTS}/${id}`)
// 		return data
// 	}
//
// 	async create(body) {
// 		const { data } = await $axios.post(WORKOUTS, body)
// 		return data
// 	}
//
// 	async update(id, body) {
// 		const { data } = await $axios.put(`${WORKOUTS}/${id}`, body)
// 		return data
// 	}
//
// 	async delete(id) {
// 		const { data } = await $axios.delete(`${WORKOUTS}/${id}`)
// 		return data
// 	}
// }
//
// export default new WorkoutService()
