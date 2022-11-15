import 'uno.css'
import { render } from 'solid-js/web'
import type { Component } from 'solid-js'

import Logo from './components/logo'

const App: Component = () => {
	return (
		<>
			<main class="db8dbf">
				<Logo />
				<h1 class="cc4e20">KIVOTOS | NETWORK</h1>
			</main>
		</>
	)
}

render(() => <App />, document.getElementById('root') as HTMLElement)
