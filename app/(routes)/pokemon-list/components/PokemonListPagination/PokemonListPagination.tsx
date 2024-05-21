import {useSelector} from "react-redux";
import {PaginationContainer} from "./PokemonListPagination.styled";
import ReactPaginate from "react-paginate";

const PokemonListPagination: React.FC = () => {
  const pagesCount = useSelector((state: any) => state.pokemonList.pagesCount)
  const page = useSelector((state: any) => state.pokemonList.page)

  const handlePageClick = (data: { selected: number }) => {
    window.history.pushState({}, '', `?page=${data.selected + 1}`)
  }

  return <PaginationContainer>
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pagesCount}
      previousLabel="<"
      forcePage={page - 1}
      renderOnZeroPageCount={null}
    />
  </PaginationContainer>
}

export default PokemonListPagination;