export const errorHandler = (statusCode, message) => {
  let error = new Error(message);
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
