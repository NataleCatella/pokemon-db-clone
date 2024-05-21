import styled from "styled-components";

export const PokemonListItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 0;
    padding: 8px;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 12px;
    
    &:hover {
        background: var(--gray-2);
    }
`