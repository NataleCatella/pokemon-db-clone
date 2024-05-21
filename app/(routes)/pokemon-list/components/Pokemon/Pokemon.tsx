import type {Pokemon, PokemonType} from '@/app/_types/Pokemon';
import {PokemonCard, PokemonExtendedContainer, PokemonContent} from './Pokemon.styles';
import useFetchPokemonDetail from "@/app/(routes)/pokemon-list/hooks/useFetchPokemonDetail";
import {memo, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import PokemonMainDetails from "./components/PokemonMainDetails/PokemonMainDetails";
import PokemonAdditionalDetails from "./components/PokemonAdditionalDetails/PokemonAdditionalDetails";

interface PokemonProps {
  pokemon: Pokemon;
}

const Pokemon: React.FC<PokemonProps> = memo(({pokemon}) => {
  const {pokemonDetail, isLoading, status, isError, isSuccess} = useFetchPokemonDetail(pokemon.name)
  const types = ((pokemonDetail?.types && pokemonDetail.types.map(type => type.type.name)) || []) as PokemonType[]
  const [isWaitForAnimation, setIsWaitForAnimation] = useState(false)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const handleClick = () => {
    setIsDetailOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isDetailOpen) {
      setIsWaitForAnimation(true)
    } else {
      setTimeout(() => setIsWaitForAnimation(false), 300)
    }
  }, [isDetailOpen]);

  return <PokemonCard $extended={isDetailOpen}
                      $zHigher={isWaitForAnimation}>
    <PokemonExtendedContainer $extended={isDetailOpen}
                              onClick={handleClick}
                              as={motion.div}
                              layout>

      <PokemonContent $type1={types[0]}
                      $type2={types[1]}
                      $error={isError}
                      $extended={isDetailOpen}
                      as={motion.div}
                      layout>

        <PokemonMainDetails pokemonDetail={pokemonDetail}
                            extended={isDetailOpen}
                            waitForAnimation={isWaitForAnimation}
                            types={types}
                            isLoading={isLoading}
                            isError={isError}
                            isSuccess/>

        <AnimatePresence mode="sync">
          {isDetailOpen && <PokemonAdditionalDetails pokemonDetail={pokemonDetail}/>}
        </AnimatePresence>
      </PokemonContent>
    </PokemonExtendedContainer>
  </PokemonCard>
}, (prevProps, nextProps) => {
  return prevProps.pokemon.name === nextProps.pokemon.name
})

export default Pokemon