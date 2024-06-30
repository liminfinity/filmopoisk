import { IOrigin } from "@shared/types";

function getOriginURL({ protocol, host, port }: IOrigin) {
	return `${protocol}://${host}${port ? ":" + port : ""}`;
}

export { getOriginURL };
