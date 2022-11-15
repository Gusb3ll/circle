import 'uno.css'
import { render } from 'solid-js/web'
import type { Component } from 'solid-js'

import Logo from './components/logo'

const App: Component = () => {
	return (
		<>
			<main class="b6e86f">
				<Logo />
				<h1 class="d424d4">KIVOTOS | MILLENNIUM</h1>
			</main>
		</>
	)
}

render(() => <App />, document.getElementById('root') as HTMLElement)
