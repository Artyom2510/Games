export const handleHttpError = (error: unknown) => {
	if (error instanceof Error) {
		return error.message;
	}
	return 'unknown error';
};
