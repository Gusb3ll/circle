import 'uno.css'
import { render } from 'solid-js/web'
import type { Component } from 'solid-js'

import Logo from './components/logo'

const App: Component = () => {
	return (
		<>
			<main class="f3cd81">
				<Logo />
				<h1 class="cd0594">KIVOTOS | GEHENNA</h1>
			</main>
		</>
	)
}

render(() => <App />, document.getElementById('root') as HTMLElement)
