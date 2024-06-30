import { useState } from "react";
import PaginationControl from "./component";
export default function MockProvider() {
	const [page, setPage] = useState(1);

	return (
		<PaginationControl
			currentPage={page}
			totalPages={10}
			onPageChange={setPage}
		/>
	);
}
