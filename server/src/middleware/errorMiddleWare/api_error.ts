class ApiError {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
  static serverError(message: string): ApiError {
    return new ApiError(404, message);
  }
  static transportError(message: string): ApiError {
    return new ApiError(500, message);
  }
}
export { ApiError };
