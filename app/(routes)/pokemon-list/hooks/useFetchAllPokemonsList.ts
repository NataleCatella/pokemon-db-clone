import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {PokemonResponse} from "@/app/_types/PokemonResponse";

const useFetchAllPokemonsList = () => {
  // hooks
  const {
    data,
    isLoading,
    error,
    status,
    isError,
    isSuccess,
    isFetching
  } = useQuery<PokemonResponse>({
    queryKey: ['pokemons-full-list'],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=999999`);
      return response.data;
    },
    enabled: true,
    staleTime: Infinity
  })


  return {pokemonList: data?.results, isLoading, error, status, isError, isSuccess, isFetching}
}

export default useFetchAllPokemonsList;