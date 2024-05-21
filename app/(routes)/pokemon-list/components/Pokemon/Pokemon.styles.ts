import {PokemonType} from "@/app/_types/Pokemon";
import styled from "styled-components";

const pokemonTypesAlpha: Record<PokemonType, string> = {
  normal: `background-color: rgba(168, 167, 122, 0.5);`,
  fire: `background-color: rgba(238, 129, 48, 0.5);`,
  water: `background-color: rgba(99, 144, 240, 0.5);`,
  electric: `background-color: rgba(247, 208, 44, 0.5); color: black;`,
  grass: `background-color: rgba(122, 199, 76, 0.5);`,
  ice: `background-color: rgba(150, 217, 214, 0.5); color: black;`,
  fighting: `background-color: rgba(194, 46, 40, 0.5);`,
  poison: `background-color: rgba(163, 62, 161, 0.5);`,
  ground: `background-color: rgba(226, 191, 101, 0.5); color: black;`,
  flying: `background-color: rgba(169, 143, 243, 0.5);`,
  psychic: `background-color: rgba(249, 85, 135, 0.5);`,
  bug: `background-color: rgba(166, 185, 26, 0.5); color: black;`,
  rock: `background-color: rgba(182, 161, 54, 0.5); color: black;`,
  ghost: `background-color: rgba(115, 87, 151, 0.5);`,
  dragon: `background-color: rgba(111, 53, 252, 0.5);`,
  dark: `background-color: rgba(112, 87, 70, 0.5);`,
  steel: `background-color: rgba(183, 183, 206, 0.5); color: black;`,
  fairy: `background-color: rgba(214, 133, 173, 0.5);`
}

interface PokemonCardProps {
  $type1: PokemonType;
  $type2: PokemonType;
  $error: boolean;
}

export const PokemonCard = styled.div<PokemonCardProps>`
    position: relative;
    display: flex;
    overflow: hidden;
    flex: 1 1 22%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    min-height: 187px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 0;

    &:before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 300%;
        height: 300%;
        transform: rotate(-31deg);
        transform-origin: bottom left;
        ${props => pokemonTypesAlpha[props.$type1]};
        content: '';
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
        ${props => pokemonTypesAlpha[props.$type2 || props.$type1]};
        content: '';
        z-index: 1;
    }

    & > * {
        position: relative;
        z-index: 2;
    }

    ${props => props.$error && `
      border-color: var(--red-7);
      background-color: var(--red-1);
    `}
`

export const LoadingContainer = styled.div`
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

export const ErrorMessage = styled.div`
    margin-top: 16px;
    color: var(--red-7);
    font-size: 12px;
    font-weight: bold;
`

export const PokemonSprite = styled.img`
    width: 100px;
    height: 100px;
`

export const PokemonName = styled.h3`
    text-transform: capitalize;
`

export const PokemonTypes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const pokemonTypes = {
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

type PokemonTypeProps = { $type: PokemonType };

export const PokemonTypePill = styled.div<PokemonTypeProps>`
    padding: 3px 6px;
    background-color: #007bff;
    border-radius: 5px;
    text-align: center;
    font-size: 13px;
    text-transform: capitalize;
    color: #ffffff;
    ${props => pokemonTypes[props.$type]}
`
