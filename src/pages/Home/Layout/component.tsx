import { MainHeader } from "@widgets/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<MainHeader />
			<Outlet />
		</>
	);
}
