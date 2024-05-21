import {PokemonListItem} from "./PokemonSearchItem.styled";

interface PokemonSearchItemProps {
  pokemon: {
    name: string;
  }
}

const PokemonSearchItem: React.FC<PokemonSearchItemProps> = ({pokemon}) => {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return <PokemonListItem>
    {name}
  </PokemonListItem>
}

export default PokemonSearchItem;