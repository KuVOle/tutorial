import axios from "axios";

const $host = axios.create({
	withCredentials: true,
	baseURL: "http://localhost:8833/authontification",
	validateStatus: (status) => status < 500,
});

export { $host };
