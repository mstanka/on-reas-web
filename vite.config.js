import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3030,
	},
	build: {
		rollupOptions: {
			external: ['/dist/assets/index.css'],
		},
	},
	css: {
		modules: {
			localsConvention: 'camelCase',
			scopeBehaviour: 'global',
		},
		preprocessorOptions: {
			style: {
				imports: [path.resolve(__dirname, '/index.css')],
			},
		},
	},
});
