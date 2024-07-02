import { Primitive } from "@shared/types";

const mapSearchParams = (searchParams: Record<string, Primitive>) => {
	const newSearchParams: Record<string, string> = {};
	for (const [key, value] of Object.entries(searchParams)) {
		if (value) newSearchParams[key] = value.toString();
	}
	return newSearchParams;
};

export { mapSearchParams };
