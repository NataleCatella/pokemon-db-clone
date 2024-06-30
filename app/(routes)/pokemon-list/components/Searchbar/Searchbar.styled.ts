import styled from "styled-components";

interface isSelectionOpenProps {
    $isSelectionOpen: boolean
}

export const SearchbarContainer = styled.div<isSelectionOpenProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin-bottom: 16px;
    margin-top: 16px;
    z-index: 1;

    svg {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        z-index: 3;
    }
    
    ${props => props.$isSelectionOpen && `
        z-index: 2;
    `}
`

interface InputContainerProps {
    $disabled: Boolean
}

export const InputContainer = styled.div<InputContainerProps>`
    position: relative;
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin-bottom: 16px;
    z-index: 1;

    svg {
        position: absolute;
        top: 12px;
        left: 12px;
        width: 16px;
        height: 16px;
        transition: color 0.2s;
    }

    ${props => props.$disabled && `
        svg {
            color: var(--gray-5); 
        }
        
        input {
            &::placeholder {
                color: var(--gray-5);
            }
        }
    `}
`
export const SearchbarInput = styled.input`
    display: inline-flex;
    padding: 12px;
    padding-left: 40px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 12px;
    transition: border-color 0.2s, box-shadow 0.2s;
    z-index: 1;

    &::placeholder {
        transition: color 0.2s;
    }

    &:focus {
        outline: none;
        border-color: var(--accent-8);
        box-shadow: 0 0 0 2px var(--accent-2);

        & + svg {
            color: var(--accent-7);
        }
    }
`

export const PokemonSelection = styled.div`
    position: absolute;
    top: 125%;
    left: 50%;
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: flex-start;
    align-items: flex-start;
    background: var(--white);
    width: 300px;
    max-height: 360px;
    overflow: auto;
    border: 1px solid var(--gray-5);
    transform: translateX(-50%);
    z-index: 5;
`

export const NoPokemonFoundP = styled.p`
    padding: 8px;
    font-size: 12px;
    color: var(--gray-9);
`
