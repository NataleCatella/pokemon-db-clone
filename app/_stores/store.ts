import {configureStore} from "@reduxjs/toolkit";

import PokemonListSlice from "./slices/pokemonListSlice";
import BerriesListSlice from "./slices/berriesSlice";

export const makeStore = () => configureStore(
  {
    reducer: {
      pokemonList: PokemonListSlice,
      berriesList: BerriesListSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
  }
)

// some of the types you might need
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']