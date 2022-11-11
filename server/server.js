const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

const { AppError } = require("./utils/AppError");
const httpStatus = require("http-status");
//load db
const { loadDb } = require("./db");

//use this template for calling fake db
(async function () {
	const db = await loadDb();
	// console.log(db);
})();

//ROUTE
app.get("/products", (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
});

//404 ENDPOINT NOTFOUND HANDLER
app.use(function (req, res, next) {
	next(new AppError(httpStatus.NOT_FOUND, "ENDPOINT_NOT_FOUND"));
});

//ERROR HANDLER
app.use(function (err, req, res, next) {
	let message;
	let status;
	let type = err.type;

	if (err.name === "SequelizeUniqueConstraintError") {
		message = err.errors[0].message;
		status = httpStatus.UNPROCESSABLE_ENTITY;
		type = `${err.errors[0].path}.used`;
	} else {
		message = err.message;
		status = err.statusCode
			? err.statusCode
			: httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
	}

	res.status(status).json({
		statusCode: status,
		message,
		type,
	});
});

const cb = () => {
	console.log(`Server is running at ${PORT}`);
};
app.listen(PORT, cb);
