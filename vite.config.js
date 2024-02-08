import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
const finalFolder = '../docs';

export default defineConfig({
	plugins: [ViteMinifyPlugin({}), ViteImageOptimizer({})],
	base: '',
	root: 'src',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/index.html'),
				simple: resolve(__dirname, 'src/html/simple.html'),
				advanced: resolve(__dirname, 'src/html/advanced.html')
				// Añade aquí el resto de páginas que quieras.(nombre único: resolve(__dirname, 'src/html/archivo.html'))
			}
		},
		outDir: finalFolder
	}
});
