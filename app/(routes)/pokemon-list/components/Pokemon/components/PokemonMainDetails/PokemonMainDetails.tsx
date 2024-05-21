import {Pokemon, type PokemonType} from "@/app/_types/Pokemon";
import {TbPokeball} from "react-icons/tb";

import {
  ErrorMessage,
  LoadingContainer,
  MainDetails,
  PokemonName,
  PokemonSprite,
  PokemonTypePill,
  PokemonTypes
} from "./PokemonMainDetails.styled";
import {motion} from "framer-motion";

interface MainDetailsProps {
  pokemonDetail: Pokemon | undefined;
  types: string[];
  extended: boolean;
  waitForAnimation: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const PokemonMainDetails: React.FC<MainDetailsProps> = ({
                                                          pokemonDetail,
                                                          types,
                                                          extended,
                                                          waitForAnimation,
                                                          isLoading,
                                                          isError,
                                                          isSuccess
                                                        }) => {
  return <MainDetails as={motion.div}
                      layout="position"
                      $extended={extended}
                      $waitForAnimation={waitForAnimation}>
    {isLoading && <LoadingContainer><TbPokeball/></LoadingContainer>}

    <PokemonName>{pokemonDetail?.name}</PokemonName>
    {isError && <ErrorMessage>
      Error: It has not been possible to complete the request. <br/>
      Please try again later.
    </ErrorMessage>}

    {isSuccess && pokemonDetail && <>
      {pokemonDetail.sprites && <PokemonSprite src={pokemonDetail?.sprites.front_default || ''}/>}

      <PokemonTypes>
        {types && types.map(type => {
          return <PokemonTypePill key={type} $type={type.toLowerCase() as PokemonType}>{type}</PokemonTypePill>
        })}
      </PokemonTypes>
    </>}
  </MainDetails>;
}

export default PokemonMainDetails