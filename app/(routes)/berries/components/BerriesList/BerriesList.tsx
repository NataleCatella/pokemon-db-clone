import useFetchBerries from "@/app/(routes)/berries/hooks/useFetchBerries";
import {BerriesListSection} from "@/app/(routes)/berries/components/BerriesList/BerriesList.styled";
import {TbPokeball} from "react-icons/tb";
import {ListLoader, LoadingIcon} from "@/app/_styled/ListLoader.styled";
import Berry from "@/app/(routes)/berries/components/Berry/Berry";
import BerryListHeading from "./components/BerryListHeading";

const BerriesList = () => {
  const {berries, isError, isLoading, isSuccess} = useFetchBerries();

  return <BerriesListSection>
    {isLoading && <ListLoader>
      <LoadingIcon><TbPokeball/></LoadingIcon>
    </ListLoader>}


    {!isLoading && isSuccess && berries && (
      <>
        <BerryListHeading/>
        
        {berries.map(berry => (
          <Berry key={berry.name} berry={berry}/>
        ))}
      </>
    )}
  </BerriesListSection>
}

export default BerriesList