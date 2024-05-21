import Pokemon from "@/app/(routes)/pokemon-list/components/Pokemon/Pokemon";
import {PokemonListSection, PokemonListContainer, LoadingIcon, ListLoader} from './PokemonList.styled';
import PokemonListPagination from "@/app/(routes)/pokemon-list/components/PokemonListPagination/PokemonListPagination";
import { TbPokeball } from "react-icons/tb";
import useFetchPokemons from "@/app/(routes)/pokemon-list/hooks/useFetchPokemons";

const PokemonList = () => {
  const {
    pokemons,
    isLoading,
    error,
    isError,
    isSuccess,
    isFetching
  } = useFetchPokemons()
  
  return <PokemonListSection>
    {isLoading && <ListLoader>
      <LoadingIcon><TbPokeball/></LoadingIcon>
    </ListLoader>}
    {isError && <div>Error: {error?.message}</div>}
    {(isSuccess || isFetching) && <>
      <PokemonListContainer>
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.name} pokemon={pokemon}/>
        })}
      </PokemonListContainer>
      <PokemonListPagination/>
    </>
    }
  </PokemonListSection>
}


export default PokemonList;