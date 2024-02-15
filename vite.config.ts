import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import tsconfigPaths from "vite-tsconfig-paths"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
			babel: {
				plugins: ["@emotion/babel-plugin"]
			}
		}),
		dts({
			// rollupTypes: true,
			insertTypesEntry: true
		}),
		tsconfigPaths()
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "coyo-ui",
			formats: ["es", "cjs"],
			fileName: format => `index.${format}.js`
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM"
				},
				banner: '"use client";',
				interop: "compat"
			}
		},
		commonjsOptions: {
			esmExternals: ["react"]
		}
	}
})
