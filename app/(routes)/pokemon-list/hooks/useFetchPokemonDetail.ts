import {useQuery} from "@tanstack/react-query";
import {Pokemon} from "@/app/_types/Pokemon";

const useFetchPokemonDetail = (name: string) => {
  const {
    data,
    isLoading,
    error,
    status,
    isError,
    isSuccess
  } = useQuery<Pokemon>({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return response.json();
    },
    staleTime: Infinity,
    enabled: true,
    retry: 1
  })

  return {pokemonDetail: data, isLoading, error, status, isError, isSuccess}
}

export default useFetchPokemonDetail;