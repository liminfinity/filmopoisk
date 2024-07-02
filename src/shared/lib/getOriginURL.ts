import { IOrigin } from "@shared/types";

const getOriginURL = ({ protocol, host, port }: IOrigin) => {
	return `${protocol}://${host}${port ? ":" + port : ""}`;
};

export { getOriginURL };
