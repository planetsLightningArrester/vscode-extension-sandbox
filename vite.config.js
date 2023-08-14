import { defineConfig } from "vite";
import { join, resolve } from "path";

export default defineConfig({
  resolve: {
    alias: [
      { find: /@(.*)/, replacement: join(resolve(__dirname, 'src'), "$1") }
    ]
  },
  build: {
    outDir: "out",
    lib: {
      entry: resolve(__dirname, 'src/extension.ts'),
      name: 'vscode-sandbox-extension-example',
      fileName: 'extension',
      formats: ['cjs']
    },
    rollupOptions: {
      external: ['vscode'],
      output: {
        globals: {
          vscode: 'vscode'
        }
      }
    }
  },
});