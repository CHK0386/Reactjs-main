const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())


const { AppError } = require("./utils/AppError");
const httpStatus = require("http-status");
//load db
const { loadDb } = require("./db");

//use this template for calling fake db
(async function () {
	const db = await loadDb();
	console.log(db);
})();
const mongoose = require('mongoose');
//models
const UserModel = require("./models/User.model")


mongoose.connect('mongodb+srv://khang:123@cluster0.slg2yoy.mongodb.net/ReactMain?retryWrites=true&w=majority', (err) => {
	if(err) console.log(err.message)

	console.log('DB connected')
});

//ROUTE

app.use('/api', (req,res,next) => {
	res.send("Welcome to api")
})

app.post("/register", async (req, res, next) => {
	try {
		const {fullname, email, password}  = req.body;

		const user = await UserModel.create({firstname: fullname, email, password})

		res.json({msg: "Register success", user})
	} catch (error) {
		next(error);
	}
});

app.post("/login",async (req, res, next) => {
	try {
		let {email,password} = req.body
		const db = await loadDb();
let existUser = db.user.find(user => user.email == email)
let existPassword = db.user.find(user => user.password == password)

if(existUser, existPassword) {
	res.json({msg:"Thanh cong"})
} else {
	res.json({msg:"That bai"})
}
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
			: httpStatus.INTERNAL_SERVER_ERROR;
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
