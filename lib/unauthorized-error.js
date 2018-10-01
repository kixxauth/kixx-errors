'use strict';


class UnauthorizedError extends Error {
	constructor(message, spec = {}) {
		super(message);

		Object.defineProperties(this, {
			name: {
				enumerable: true,
				value: 'UnauthorizedError'
			},
			message: {
				enumerable: true,
				value: message
			},
			code: {
				enumerable: true,
				value: 'UNAUTHORIZED_ERROR'
			},
			title: {
				enumerable: true,
				value: 'Unauthorized'
			},
			statusCode: {
				enumerable: true,
				value: 401
			},
			detail: {
				enumerable: true,
				value: message
			},
			headers: {
				enumerable: true,
				value: Object.freeze(spec.headers || {})
			}
		});

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

module.exports = UnauthorizedError;
