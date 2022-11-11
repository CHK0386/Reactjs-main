var glob = require("glob");
const fs = require("fs").promises;
const path = require("path");
const { AppError } = require("../utils/AppError");
const httpStatus = require("http-status");

const loadDb = () => {
	return new Promise(async (resolve, reject) => {
		try {
			let db = {};
			let files = glob.sync("./*.json", { cwd: "db" });

			for (const file of files) {
				let rawData = await fs.readFile(path.join(__dirname, file));

				let tableName = path.basename(file, path.extname(file));
				db[tableName] = JSON.parse(rawData)[tableName];
			}

			resolve(db);
		} catch (error) {
			reject(new AppError(httpStatus.INTERNAL_SERVER_ERROR, err));
		}
	});
};

module.exports = {
	loadDb,
};
