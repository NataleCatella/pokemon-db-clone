import styled from "styled-components";

export const Heading = styled.div`
    display: flex;
    justify-items: flex-start;
    align-items: center;
    width: 100%;
    padding: 6px;
    gap: 10px;

    @media (max-width: 991px) {
        display: none;
    }
`

interface BerryCellProps {
  $size?: "small" | "medium" | "large" | "image";
}

export const BerryCell = styled.div<BerryCellProps>`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    gap: 4px;
    font-size: 11px;

    ${props => props.$size == 'small' && `
        flex: 0 0 62px;
    `}

    ${props => props.$size == 'medium' && `
        flex: 0 0 80px;
    `}

    ${props => props.$size == 'large' && `
        flex: 0 0 200px;
    `}

    ${props => props.$size == 'image' && `
        flex: 0 0 36px;
    `}
`;