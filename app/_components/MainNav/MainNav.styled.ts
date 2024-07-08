import styled, {css} from "styled-components";

const centralize = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.nav`
    ${centralize};
    padding: 1rem;
    color: #cccccc;
`;

export const LogoContainer = styled.div`
    ${centralize};
    margin-right: 16px;
    
    svg {
        width: 32px;
        height: 32px;
    }
    
    @media (max-width: 768px) {
        margin-right: 12px;
    }
`;

export const LinksList = styled.ul`
    ${centralize};
    list-style: none;
    gap: 16px;

    @media (max-width: 768px) {
        gap: 12px;
    }
`;

export const LinkLi = styled.li`
    ${centralize};
    list-style: none;
    text-align: center;
`;

export const MobileText = styled.span`
    display: none;

    @media (max-width: 575px) {
        display: block;
        
        & + span {
            display: none;
        }
    }
`;

export const Text = styled.span`
    display: block;
`;