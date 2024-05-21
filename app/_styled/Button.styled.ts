import styled, {css} from "styled-components";

interface ButtonProps {
  $size?: "small" | "medium" | "large";
  $variant?: "default" | "soft" | "outline";
  $active?: boolean;
}

const sizeStyles = {
  small: `
    font-size: 12px;
    padding: 0 8px;
    height: 24px;
  `,
  medium: `
    font-size: 14px;
    padding: 0 12px;
    height: 32px;
  `,
  large: `
    font-size: 18px;
    padding: 0 16px;
    height: 40px;
  `,
};

const variantStyles = {
  soft: `
    background-color: var(--accent-3);
    color: var(--accent-10);
    
    &:hover {
        background-color: var(--accent-6);
    }
  `,
  default: `
    background-color: var(--accent-10);
    color: var(--gray-0);
    
    &:hover {
        background-color: var(--accent-11);
    }
  `,
  outline: `
    background-color: var(--accent-2);
    color: var(--accent-10);
    border: 1px solid var(--accent-10);
    
    &:hover {
        background-color: var(--accent-4);
    }
  `,
};

const activeStyles = {
  soft: `background-color: var(--accent-6);`,
  default: `background-color: var(--accent-11);`,
  outline: `background-color: var(--accent-4);`,
};

export const ButtonStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: 500;
    line-height: 1;
    user-select: none;
    transition: background-color 0.2s ease;
`

const ButtonStylesWProps = css<ButtonProps>`
    ${props => sizeStyles[props.$size || 'medium']}
    ${props => variantStyles[props.$variant || 'default']}
    ${props => props.$active && activeStyles[props.$variant || 'default']}
`

const Button = styled.button<ButtonProps>`
    ${ButtonStyles}
    ${ButtonStylesWProps}

    ${props => props.disabled && `
      cursor: not-allowed;
      background-color: var(--gray-4);
      color: var(--gray-8);
    `}
`;

export default Button;