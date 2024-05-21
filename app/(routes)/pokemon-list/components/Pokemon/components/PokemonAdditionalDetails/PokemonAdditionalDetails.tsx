import {Pokemon} from "@/app/_types/Pokemon";
import {
  DetailsContainer,
  DetailRow,
  Label,
  Value,
  Ability,
  MovesContainer,
  Move
} from "@/app/(routes)/pokemon-list/components/Pokemon/components/PokemonAdditionalDetails/PokemonAdditionalDetails.styled";
import {motion} from "framer-motion";

interface PokemonAdditionalDetailsProps {
  pokemonDetail: Pokemon | undefined;
}

const formatString = (label: string) => {
  return label.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())

}

const PokemonAdditionalDetails: React.FC<PokemonAdditionalDetailsProps> = ({pokemonDetail}) => {
  const attributes: Array<keyof Pokemon> = ['height', 'weight', 'base_experience']

  return pokemonDetail ? <DetailsContainer as={motion.div}
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.35, delay: 0.3}}}
                        exit={{opacity: 0, transition: {duration: 0}}}>
      {attributes.map((attribute: keyof Pokemon) => <DetailRow key={attribute}>
          <Label>{formatString(attribute)}</Label>
          <Value>{pokemonDetail ? String(pokemonDetail[attribute]) : ''}</Value>
        </DetailRow>
      )}

      <DetailRow>
        <Label>Abilities</Label>
        <Value>
          {pokemonDetail.abilities.map(ability => {
            return <Ability key={ability.ability.name}>{formatString(ability.ability.name)}</Ability>
          })}
        </Value>
      </DetailRow>

      {pokemonDetail.moves.length > 0 &&
        <DetailRow $noWrap>
          <Label>Moves</Label>
          <Value>
            <MovesContainer>
              {pokemonDetail.moves.map(move => {
                return <Move key={move.move.name}>
                  {formatString(move.move.name)}
                </Move>
              })}
            </MovesContainer>
          </Value>
        </DetailRow>
      }
    </DetailsContainer>
    : null
}

export default PokemonAdditionalDetails