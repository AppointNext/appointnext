class ApiError extends Error {
  constructor(statusCode, message, error) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }
}

export default ApiError;
