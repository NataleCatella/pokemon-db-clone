import styled from "styled-components";

export const PokemonListSection = styled.div`
    position: relative;
    display: block;
    width: 100%;
    z-index: 1;
`


export const ListLoader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    font-size: 24px;
    color: var(--gray-10);
    z-index: 3;
`

export const LoadingIcon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center center;
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

export const PokemonListContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;
    min-height: 240px;
    z-index: 2;
`