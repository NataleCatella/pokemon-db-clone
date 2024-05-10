import * as S from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return <S.Button {...props}>
    {children}
  </S.Button>;
}

export default Button;