'use strict';

class UnprocessableError extends Error {
	constructor(message, spec = {}) {
		super(message);

		Object.defineProperties(this, {
			name: {
				enumerable: true,
				value: 'UnprocessableError'
			},
			message: {
				enumerable: true,
				value: message
			},
			code: {
				enumerable: true,
				value: 'UNPROCESSABLE_ERROR'
			},
			title: {
				enumerable: true,
				value: 'Unprocessable Entity'
			},
			statusCode: {
				enumerable: true,
				value: 422
			},
			detail: {
				enumerable: true,
				value: message
			},
			pointer: {
				enumerable: true,
				value: spec.pointer
			}
		});

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

module.exports = UnprocessableError;
