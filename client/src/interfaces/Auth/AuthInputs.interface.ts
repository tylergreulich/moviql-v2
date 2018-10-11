interface AuthInputFieldProps {
  email: string;
  username?: string;
  password: string;
  confirmPassword?: string;
}

interface AuthInputErrorProps {
  errors?: {
    [key: string]: AuthInputFieldProps;
  };
}

interface AuthInputUIProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRegisterForm?: boolean;
  showPassword?: boolean;
  onClick?: () => void;
  endAdornment?: any;
}

export type AuthInputProps = AuthInputFieldProps &
  AuthInputErrorProps &
  AuthInputUIProps;
