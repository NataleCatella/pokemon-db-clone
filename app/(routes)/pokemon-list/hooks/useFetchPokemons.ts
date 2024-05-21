import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {useAppDispatch, useAppSelector} from "@/app/_stores/hooks";
import {setPage, setPagesCount, setPokemons} from "@/app/_stores/slices/pokemonListSlice";
import axios from "axios";
import {useSearchParams} from "next/navigation";
import {PokemonResponse} from "@/app/_types/PokemonResponse";


const useFetchPokemons = () => {
  // hooks
  const searchParams = useSearchParams()
  const pokemons = useAppSelector((state) => state.pokemonList.pokemons)
  const dispatch = useAppDispatch();


  // state
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  // effect
  useEffect(() => {
    if (searchParams.get('page')) {
      const page = Number(searchParams.get('page'))
      dispatch(setPage(page))
    }
  }, []);

  const {
    data,
    isLoading,
    error,
    status,
    isError,
    isSuccess,
    isFetching
  } = useQuery<PokemonResponse>({
    queryKey: ['pokemons-page-', page],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=40&offset=${(page - 1) * 40}`);
      return response.data;
    },
    enabled: true,
    staleTime: Infinity
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(setPokemons(data.results))
      dispatch(setPagesCount(Math.ceil(data.count / 40)))
    }
  }, [data]);

  return {pokemons, isLoading, error, status, isError, isSuccess, isFetching}
}

export default useFetchPokemons;