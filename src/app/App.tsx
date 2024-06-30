import { ReduxProvider, RouterProvider } from "./providers";
import "./styles/globals.scss";

function App() {
	return (
		<ReduxProvider>
			<RouterProvider />
		</ReduxProvider>
	);
}

export default App;
