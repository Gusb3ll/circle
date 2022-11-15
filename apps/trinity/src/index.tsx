import 'uno.css'
import { render } from 'solid-js/web'
import type { Component } from 'solid-js'

import Logo from './components/logo'

const App: Component = () => {
	return (
		<>
			<main class="ec68ab">
				<Logo />
				<h1 class="cf1f56">KIVOTOS | TRINITY</h1>
			</main>
		</>
	)
}

render(() => <App />, document.getElementById('root') as HTMLElement)
