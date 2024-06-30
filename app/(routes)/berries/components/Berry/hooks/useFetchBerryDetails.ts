import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Berry} from "@/app/_types/Berry";

const useFetchBerryDetails = (name: string) => {
  const {
    data,
    isLoading,
    isError,
    isSuccess
  } = useQuery<Berry>({
    queryKey: ["berry-detail-" + name],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/berry/${name}`);
      return response.data;
    },
    staleTime: Infinity,
    enabled: true,
    retry: 1
  })

  return {berryDetail: data, isLoading, isError, isSuccess}
}

export default useFetchBerryDetails;