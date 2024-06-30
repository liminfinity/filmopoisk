import axios from "axios";
import { API_URL } from "./consts";

const $api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
	responseType: "json",
	timeout: 5000,
});

export { $api };
