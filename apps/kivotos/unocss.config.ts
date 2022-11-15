import { defineConfig } from '@unocss/vite'
import { presetMini } from '@unocss/preset-mini'

export default defineConfig({
	presets: [presetMini()],
	shortcuts: {
		db8dbf: 'flex h-screen flex-col gap-4 justify-center items-center',
		cc4e20:
			'sm:text-4xl text-2xl text-white text-center font-300 tracking-wider select-none',
		e5b3b3:
			'sm:w-128 w-48 sm:h-72 h-42 select-none pointer-events-none subpixel-antialiased'
	}
})
