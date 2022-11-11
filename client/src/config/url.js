import { DEVELOPMENT, PRODUCTION } from "./api.env";

const setBaseUrl = () => {
	const { REACT_APP_ENV } = process.env;

	console.log(REACT_APP_ENV);
	if (REACT_APP_ENV == DEVELOPMENT) return "http://localhost:3001/api";
	if (REACT_APP_ENV == PRODUCTION) return "/YOUR_API_PROD_STRING/";

	return "http://localhost:3001";
};

export const API_URL = setBaseUrl();
