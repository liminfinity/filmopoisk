import { Home, Movie } from "@pages/index";
import {
	createBrowserRouter,
	RouterProvider as ReactRouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home.Layout />,
		children: [
			{
				index: true,
				element: <Home.MainPage />,
			},
			{
				path: "/movies",
				children: [
					{
						path: ":movieId",
						element: <Movie.MainPage />,
					},
				],
			},
		],
	},
]);

export default function RouterProvider() {
	return <ReactRouterProvider router={router} />;
}
