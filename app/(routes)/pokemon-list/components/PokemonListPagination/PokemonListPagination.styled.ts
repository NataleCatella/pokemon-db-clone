import styled from "styled-components";
import {ButtonStyles} from "@/app/_styled/Button.styled";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 32px;


    ul {
        display: flex;
        gap: 10px;
    }

    li {
        list-style: none;

        &.selected {
            a {
                background-color: var(--green-8);
                color: var(--white);
            }
        }
    }

    a {
        ${ButtonStyles};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 2px;
        cursor: pointer;
    }
`;
