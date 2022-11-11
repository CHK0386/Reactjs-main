class AppError extends Error {
	constructor(statusCode, message, type) {
		super();

		this.statusCode = statusCode;
		this.message = message;
		this.type = type;

		//Add stackTrace to this AppError
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, AppError);
		}
	}
}

module.exports.AppError = AppError;
