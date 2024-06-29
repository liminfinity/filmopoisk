import {
	createBrowserRouter,
	RouterProvider as ReactRouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
		children: [
			{
				index: true,
				element: <div>Home</div>,
			}
		],
	},
	{
		path: "/movies",
		element : <div>Movie</div>,
		children: [
			{
				path: ":movieId",
				element: <div>MovieId</div>,
			}
		]
	}
]);

export default function RouterProvider() {
	return <ReactRouterProvider router={router} />;
}
