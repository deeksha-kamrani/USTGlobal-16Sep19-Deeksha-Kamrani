export class LoginResponse {
  message: string;
    constructor(
        public email: string,
        public password: string,
    ) { }
}