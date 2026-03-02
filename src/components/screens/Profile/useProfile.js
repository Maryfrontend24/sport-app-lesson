import { useQuery } from '@tanstack/react-query'

import userService from '@/services/user.service.js'

export const useProfile = () => {
	return useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		select: ({ data }) => data
	})
}
// ghkkkk
