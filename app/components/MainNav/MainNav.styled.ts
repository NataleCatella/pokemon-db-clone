import styled, {css} from "styled-components";
import NextLink from "next/link";
import {Button} from "@/app/components/Button/Button.styled";

const centralize = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.nav`
    ${centralize};
    padding: 1rem;
    //background-color: #333;
    color: #fff;
`;

export const LogoContainer = styled.div`
    ${centralize};
    margin-right: 32px;
`;

export const LinksList = styled.ul`
    ${centralize};
    list-style: none;
    gap: 1rem;
`;

export const LinkLi = styled.li`
    ${centralize};
    list-style: none;
`;