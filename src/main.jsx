import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RouterComponent from 'src/routes/Routes.jsx'

import './assets/styles/index.scss'
import AuthProvider from '@/providers/AuthProvider.jsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<BrowserRouter>
					<RouterComponent />
				</BrowserRouter>
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
