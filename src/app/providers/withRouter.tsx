import { Entry } from "@pages/index";
import {
	createBrowserRouter,
	RouterProvider as ReactRouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Entry.Layout />,
		children: [
			{
				index: true,
				element: <Entry.MainPage />,
			},
			{
				path: "/movies",
				children: [
					{
						path: ":movieId",
						element: <div>MovieId</div>,
					},
				],
			},
		],
	},
]);

export default function RouterProvider() {
	return <ReactRouterProvider router={router} />;
}
