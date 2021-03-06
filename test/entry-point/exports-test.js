'use strict';

const {assert} = require('kixx-assert');

module.exports = function (t) {
	const EXPECTED_ERRORS = Object.freeze({
		BadRequestError: 'bad-request-error',
		ConflictError: 'conflict-error',
		ForbiddenError: 'forbidden-error',
		MethodNotAllowedError: 'method-not-allowed-error',
		NotAcceptableError: 'not-acceptable-error',
		NotFoundError: 'not-found-error',
		NotImplementedError: 'not-implemented-error',
		StackedError: 'stacked-error',
		UnauthorizedError: 'unauthorized-error',
		UnprocessableError: 'unprocessable-error',
		UnsupportedMediaTypeError: 'unsupported-media-type-error',
		UserError: 'user-error',
		ValidationError: 'validation-error'
	});

	const INDEX_EXPORTS = Object.freeze(Object.assign(
		{},
		require('../../index')
	));

	const BASE_ERRORS_LIB_PATH = '../../lib';

	t.it('should export all expected Error classes', () => {
		Object.entries(EXPECTED_ERRORS).forEach(([className, fileName]) => {
			const ActualErrorClass = require(`${BASE_ERRORS_LIB_PATH}/${fileName}`);
			const IndexReference = INDEX_EXPORTS[className];
			assert.isEqual(ActualErrorClass, IndexReference, `IndexReference for ${className}`);
		});
	});
};
