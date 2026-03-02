// export const AuthServices = {                  это на объектах сервисы
// 	login: (email, password) => {
//
// 	}
// }
// сервисы на классе
import Cookies from 'js-cookie'

import { $axios } from '@/api.js'
import { TOKEN } from '@/app.constants.js'

class AuthService {
	async main(email, password, type) {
		const { data } = await $axios.post(`/auth/${type}`, {
			email,
			password
		})

		if (data.token) {
			Cookies.set(TOKEN, data.token)
		}

		return data
	}
}

export default new AuthService()
