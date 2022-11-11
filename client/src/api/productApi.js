import axiosClient from "./axiosClient";

class ProductApi {
	getAll = (params) => {
		//url is just the endpoint to individual endpoint of your node api
		const url = "/products";
		return axiosClient.get(url, { params });
	};

	get = (id) => {
		const url = "/products/${id}";
		return axiosClient.get(url);
	};
}
const productApi = new ProductApi();

export default productApi;
