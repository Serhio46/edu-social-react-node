export default class ApiError extends Error {
   status: number;
   errors: Error[];

   constructor(status: number, message: string, errors: Error[] = []) {
      super(message);
      this.status = status;
      this.errors = errors;
   }

   static UnauthorizedError() {
      return new ApiError(401, 'User not authorized');
   }

   static BadRequest(message: string, errors: any[] = []) {
      return new ApiError(400, message, errors);
   }
}
