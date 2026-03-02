import react from '@vitejs/plugin-react'
/* eslint-disable no-undef */
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	base: '/sport-app-lesson/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			src: path.resolve(__dirname, './src')
		}
	}
})
