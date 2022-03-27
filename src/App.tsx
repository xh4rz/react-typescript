import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';

function App() {
	return (
		<>
			<h1>React + TypeScript</h1>
			<hr />
			<h2>useState</h2>
			<Counter />
			<Usuario />
			<hr />

			<h2>useEffect - useRef</h2>

			<TimerPadre />
		</>
	);
}

export default App;
