import type {Pokemon, PokemonType} from '@/app/_types/Pokemon';
import {
  PokemonCard,
  LoadingContainer,
  ErrorMessage,
  PokemonSprite,
  PokemonName,
  PokemonTypes,
  PokemonTypePill
} from './Pokemon.styles';
import useFetchPokemonDetail from "@/app/(routes)/pokemon-list/hooks/useFetchPokemonDetail";
import {memo} from "react";
import {TbPokeball} from "react-icons/tb";

interface PokemonProps {
  pokemon: Pokemon;
}

const Pokemon: React.FC<PokemonProps> = memo(({pokemon}) => {
  const {pokemonDetail, isLoading, error, status, isError, isSuccess} = useFetchPokemonDetail(pokemon.name)
  const types = ((pokemonDetail?.types && pokemonDetail.types.map(type => type.type.name)) || []) as PokemonType[]

  return <PokemonCard $type1={types[0]} $type2={types[1]} $error={isError}>
    {isLoading && <LoadingContainer><TbPokeball/></LoadingContainer>}
    <PokemonName>{pokemon.name}</PokemonName>
    {isError && <ErrorMessage>Error: It has not been possible to complete the request. <br/>Please try again
      later.</ErrorMessage>}
    {isSuccess && pokemonDetail && <>
      {pokemonDetail.sprites && <PokemonSprite src={pokemonDetail?.sprites.front_default || ''}/>}
      <PokemonTypes>
        {types.map(type => {
          return <PokemonTypePill key={type} $type={type.toLowerCase() as PokemonType}>{type}</PokemonTypePill>
        })}
      </PokemonTypes>
    </>}
  </PokemonCard>
}, (prevProps, nextProps) => {
  return prevProps.pokemon.name === nextProps.pokemon.name
})

export default Pokemon