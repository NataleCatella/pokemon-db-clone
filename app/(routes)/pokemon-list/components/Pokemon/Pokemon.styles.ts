import {PokemonType} from "@/app/_types/Pokemon";
import styled from "styled-components";

interface extendedProps {
  $extended: boolean;
  $zHigher?: boolean;
}

export const PokemonCard = styled.div<extendedProps>`
    position: relative;
    display: flex;
    flex: 1 1 22%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    min-height: 187px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 1;

    ${props => props.$zHigher && `
      z-index: 2;
    `}
`

export const PokemonExtendedContainer = styled.div<extendedProps>`
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
`

export const pokemonTypes = {
  normal: `background-color: #A8A77A;`,
  fire: `background-color: #EE8130;`,
  water: `background-color: #6390F0;`,
  electric: `background-color: #F7D02C; color: black;`,
  grass: `background-color: #7AC74C;`,
  ice: `background-color: #96D9D6; color: black;`,
  fighting: `background-color: #C22E28;`,
  poison: `background-color: #A33EA1;`,
  ground: `background-color: #E2BF65; color: black;`,
  flying: `background-color: #A98FF3;`,
  psychic: `background-color: #F95587;`,
  bug: `background-color: #A6B91A; color: black;`,
  rock: `background-color: #B6A136; color: black;`,
  ghost: `background-color: #735797;`,
  dragon: `background-color: #6F35FC;`,
  dark: `background-color: #705746;`,
  steel: `background-color: #B7B7CE; color: black;`,
  fairy: `background-color: #D685AD;`
}

interface PokemonContentProps {
  $type1: PokemonType;
  $type2: PokemonType;
  $error: boolean;
  $extended: boolean;
}

export const PokemonContent = styled.div<PokemonContentProps>`
    position: relative;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    transition: padding 0.2s;
    z-index: 0;

    &:before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 300%;
        height: 300%;
        transform: rotate(-31deg);
        transform-origin: bottom left;
        ${props => pokemonTypes[props.$type1]};
        content: '';
        opacity: 0.6;
        transition: opacity 0.2s;
        z-index: 1;
    }

    &:after {
        position: absolute;
        top: 100%;
        left: 0;
        width: 300%;
        height: 300%;
        transform: rotate(-31deg);
        transform-origin: top left;
        ${props => pokemonTypes[props.$type2 || props.$type1]};
        content: '';
        opacity: 0.6;
        transition: opacity 0.2s;
        z-index: 1;
    }

    &:hover {
        &:before, &:after {
            opacity: 0.78;
        }
    }

    & > * {
        position: relative;
        z-index: 2;
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
