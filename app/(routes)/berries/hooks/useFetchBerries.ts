import {useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {useAppDispatch, useAppSelector} from "@/app/_stores/hooks";
import {setBerries} from "@/app/_stores/slices/berriesSlice";
import axios from "axios";
import {BerryResponse} from "@/app/_types/BerryResponse";


const useFetchBerries = () => {
  // hooks
  const berries = useAppSelector(state => state.berriesList.berries)
  const dispatch = useAppDispatch();

  const {
    data,
    isLoading,
    error,
    status,
    isError,
    isSuccess,
    isFetching
  } = useQuery<BerryResponse>({
    queryKey: ['berries'],
    queryFn: async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/berry/");
      return response.data;
    },
    enabled: true,
    staleTime: Infinity
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(setBerries(data.results))
    }
  }, [data]);

  return {berries, isLoading, error, isError, isSuccess}
}

export default useFetchBerries;