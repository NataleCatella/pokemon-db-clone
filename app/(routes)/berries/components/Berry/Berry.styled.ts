import styled from "styled-components";
import {PokemonType} from "@/app/_types/Pokemon";

interface extendedProps {
  $extended: boolean;
  $zHigher?: boolean;
}

export const BerryCard = styled.div<extendedProps>`
    position: relative;
    display: flex;
    flex: 0 0 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    min-height: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 1;

    ${props => props.$zHigher && `
      z-index: 2;
    `}
`;

export const BerryExtendedContainer = styled.div<extendedProps>`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;

    ${props => props.$extended && `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 0;
    `}
`;


interface PokemonContentProps {
  $error: boolean;
  $extended: boolean;
}

export const BerryContent = styled.div<PokemonContentProps>`
    position: relative;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    padding: 6px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    transition: padding 0.2s;
    z-index: 0;

    &:hover {
        &:before, &:after {
            opacity: 0.78;
        }
    }

    & > * {
        position: relative;
        z-index: 2;
    }

    @media (max-width: 991px) {
        padding: 12px;
    }

    ${props => props.$error && `
      border-color: var(--red-7);
      background-color: var(--red-1);
    `}

    ${props => props.$extended && `
      width: 80%;
      height: auto;
      padding: 32px;
      max-width: 800px;
      max-height: 480px;
      
      &:hover {
        &:before, &:after {
            opacity: 0.6;
        }
      }
    `}
`

