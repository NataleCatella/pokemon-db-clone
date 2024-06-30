import styled from "styled-components";

interface LoadingContainerProps {
  $position?: "left" | "center" | "right";
}

export const LoadingContainer = styled.div<LoadingContainerProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    transform: translate(-50%, -50%);
    z-index: 100;

    ${props => props.$position === "left" && `
      left: 0;
      transform: translate(0, -50%);
    `}
    
    svg {
        height: 30px;
        width: 30px;
        animation: spin 1s linear infinite;

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
`