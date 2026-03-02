import { useContext } from 'react'

import { AlertContext } from '@/providers/AlertProvider.jsx'

export const useAlert = () => {
	return useContext(AlertContext)
}
