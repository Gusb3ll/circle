import { defineConfig } from '@unocss/vite'
import { presetMini } from '@unocss/preset-mini'

export default defineConfig({
	presets: [presetMini()],
	shortcuts: {
		b6e86f: 'flex h-screen flex-col gap-4 justify-center items-center',
		d424d4:
			'sm:text-4xl text-2xl text-white text-center font-300 tracking-wider select-none',
		c5bbb9:
			'sm:w-72 w-48 sm:h-48 h-42 select-none pointer-events-none subpixel-antialiased'
	}
})
