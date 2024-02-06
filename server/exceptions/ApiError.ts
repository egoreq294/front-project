import { ValidationError } from "express-validator";

export class ApiError extends Error {
  status;
  errors;

  constructor(status: number, message: string, errors: ValidationError[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static ForbiddenError() {
    return new ApiError(403, "У вас нет прав на выполнение этой операции");
  }

  static UnauthorizedError() {
    return new ApiError(401, "Пользователь не авторизован");
  }

  static BadRequest(message: string, errors: ValidationError[] = []) {
    return new ApiError(400, message, errors);
  }
}
