import 'uno.css'
import { render } from 'solid-js/web'
import type { Component } from 'solid-js'

import Logo from './components/logo'

const App: Component = () => {
	return (
		<>
			<main class="flex h-screen flex-col gap-4 justify-center items-center">
				<Logo />
				<h1 class="sm:text-4xl text-2xl text-white text-center font-300 tracking-wider select-none">
					KIVOTOS | NETWORK
				</h1>
			</main>
		</>
	)
}

render(() => <App />, document.getElementById('root') as HTMLElement)
