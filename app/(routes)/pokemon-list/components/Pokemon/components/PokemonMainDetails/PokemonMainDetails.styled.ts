import {PokemonType} from "@/app/_types/Pokemon";
import {PokemonCard, pokemonTypes} from "../../Pokemon.styled";

import styled from "styled-components";

interface extendedProps {
  $extended: boolean;
  $waitForAnimation: boolean;
}

export const MainDetails = styled.div<extendedProps>`
    display: flex;
    width: 255px;
    flex: 0 0 255px;
    height: 168px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: border 0.2s ease, background-color 0.2s ease, padding 0.2s ease;

    ${props => props.$extended && `
      height: 224px;
      border: 3px solid var(--gray-3);
      background-color: rgba(255,255,255, 0.1); 
      padding: 24px;
      border-radius: 4px;
      
      ${PokemonSprite} {
        transform: scale(1) !important;
      }
    `}
`

export const PokemonSprite = styled.img`
    width: 100px;
    height: 100px;
    transition: transform 0.2s ease;

    ${PokemonCard}:hover & {
        transform: scale(1.1);
    }
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
