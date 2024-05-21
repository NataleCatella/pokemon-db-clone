import {createSlice} from "@reduxjs/toolkit";
import {Pokemon} from "../../_types/Pokemon";

interface PokemonListState {
  input: string,
  query: string;
  selectedPokemon: string;
  pagesCount: number,
  page: number,
  pokemons: Pokemon[];
}

const initialState = {
  input: "",
  query: "",
  selectedPokemon: "",
  pagesCount: 0,
  page: 1,
  pokemons: []
} as PokemonListState

const PokemonListSlice = createSlice({
  name: 'pokemon-list',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPagesCount: (state, action) => {
      state.pagesCount = action.payload;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  }
})

export const {setInput, setQuery, setPage, setPagesCount, setPokemons} = PokemonListSlice.actions;
export default PokemonListSlice.reducer;