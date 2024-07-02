import { useMovieSearchParams } from "@entities/Movie/hook";
import { IMovieSearchInputProps } from "./component.props";
import { SearchInput } from "@shared/ui";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { QUERY_TITLE_DEBOUCE_TIME } from "./consts";
import { mapSearchParams } from "@shared/lib";

export default function MovieSearchInput({
	className,
}: IMovieSearchInputProps) {
	const { genre, release_year, setMovieSearchParams } =
		useMovieSearchParams();
	const [queryTitle, setQueryTitle] = useState("");
	const [debouncedQueryTitle] = useDebounce(
		queryTitle,
		QUERY_TITLE_DEBOUCE_TIME,
	);

	const getMovies = useCallback(
		(e?: FormEvent) => {
			e?.preventDefault();
			const newSearchParams = mapSearchParams({
				title: debouncedQueryTitle,
				genre,
				release_year,
			});
			setMovieSearchParams(newSearchParams);
		},
		[debouncedQueryTitle, genre, release_year],
	);

	useEffect(() => {
		if (queryTitle === debouncedQueryTitle) getMovies();
	}, [queryTitle, debouncedQueryTitle, getMovies]);

	return (
		<SearchInput
			className={className}
			value={queryTitle}
			onChange={e => setQueryTitle(e.target.value)}
			onClear={() => setQueryTitle("")}
			onSubmit={getMovies}
		/>
	);
}
