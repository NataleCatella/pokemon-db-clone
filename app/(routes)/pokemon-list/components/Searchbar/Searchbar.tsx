'use client'

import {SearchbarContainer, InputContainer, SearchbarInput, PokemonSelection, NoPokemonFoundP} from './Searchbar.styled';
import useDebounceFn from "@/app/_hooks/useDebounce";
import {useAppSelector} from "@/app/_stores/hooks";
import {useAppDispatch} from "@/app/_stores/hooks";
import {setInput, setQuery} from "@/app/_stores/slices/pokemonListSlice";
import {FaSearch} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Pokemon} from "@/app/_types/Pokemon";
import useFetchAllPokemonsList from "@/app/(routes)/pokemon-list/hooks/useFetchAllPokemonsList";
import PokemonSearchItem from "@/app/(routes)/pokemon-list/components/PokemonSearchItem/PokemonSearchItem";

const Searchbar = () => {
  // state
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])
  const input = useAppSelector((state) => state.pokemonList.input);
  const query = useAppSelector((state) => state.pokemonList.query);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);

  // hooks
  const dispatch = useAppDispatch();
  const {
    pokemonList,
    isLoading,
    error,
    isError,
    isSuccess,
    isFetching
  } = useFetchAllPokemonsList()

  useEffect(() => {
    if (query && pokemonList) {
      setFilteredPokemon(pokemonList.filter(pokemon => pokemon.name.includes(query)))
      setIsSelectionOpen(true)
    } else {
      setFilteredPokemon([])
      setIsSelectionOpen(false)
    }
  }, [query, pokemonList]);

  // our internal logic for the hook, where we set the query after a timeout
  useDebounceFn(input, 500, () => {
    dispatch(setQuery(input))
  });

  // methods
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInput(event.target.value))
  }

  return <SearchbarContainer>
    <InputContainer $disabled={isLoading}>
      <SearchbarInput
        type="text"
        placeholder="Search for a Pokemon"
        value={input}
        onInput={handleInput}
        disabled={isLoading}
      />
      <FaSearch/>
      {isSelectionOpen && <PokemonSelection>
        {filteredPokemon.length > 0
          ? filteredPokemon.map((pokemon) => <PokemonSearchItem key={pokemon.name} pokemon={pokemon}/>)
          : <NoPokemonFoundP>No Pokemon found.</NoPokemonFoundP>
        }
      </PokemonSelection>
      }
    </InputContainer>
  </SearchbarContainer>
}

export default Searchbar;