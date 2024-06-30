import {Pokemon} from "./Pokemon";

export type PokemonResponse = {
  count: number,
  next: null,
  previous: null,
  results: Pokemon[]
}