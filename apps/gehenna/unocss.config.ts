import { defineConfig } from '@unocss/vite'
import { presetMini } from '@unocss/preset-mini'

export default defineConfig({
	presets: [presetMini()],
	shortcuts: {
		f3cd81: 'flex h-screen flex-col gap-4 justify-center items-center',
		cd0594:
			'sm:text-4xl text-2xl text-white text-center font-300 tracking-wider select-none',
		af725e:
			'sm:w-96 w-48 sm:h-64 h-42 select-none pointer-events-none subpixel-antialiased'
	}
})
