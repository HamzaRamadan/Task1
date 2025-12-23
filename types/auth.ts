export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    token: string;
    name: string;
  };
}


export interface RegisterForm {
  name: string;
  email: string;
  mobile: string;
  mobile_country_code: string;
  password: string;
  password_confirmation: string;
}

export interface RegisterResponse {
  data: {
    token: string;
    name: string;
  };
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}
