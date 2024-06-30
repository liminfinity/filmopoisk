import { getOriginURL } from "@shared/lib"

const API_VERSION = '1'

const API_URL = `${getOriginURL({
		host: import.meta.env.VITE_SERVER_HOST,
		port: import.meta.env.VITE_SERVER_PORT,
		protocol: import.meta.env.VITE_SERVER_PROTOCOL,
	})}/api/v${API_VERSION}`

export {API_URL, API_VERSION}