'use client'

import Searchbar from "./components/Searchbar/Searchbar"
import PokemonList from "./components/PokemonList/PokemonList"
import Container from "@/app/_styled/Container.styled"

const PokemonListPage: React.FC = () => {
  return <Container>
    <Searchbar/>
    <PokemonList/>
  </Container>
}

export default PokemonListPage;