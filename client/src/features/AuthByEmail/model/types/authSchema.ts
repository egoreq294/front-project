export interface AuthSchema {
  email: string;
  emailError: string | null;
  password: string;
  passwordError: string | null;
  isLoading: boolean;
  error?: string;
  isRegisterModal: boolean;
}
