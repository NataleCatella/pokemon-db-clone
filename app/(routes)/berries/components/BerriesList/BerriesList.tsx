import useFetchBerries from "@/app/(routes)/berries/hooks/useFetchBerries";
import {
  BerriesListSection,
  BerryCell,
  BerryListHeading
} from "@/app/(routes)/berries/components/BerriesList/BerriesList.styled";
import {TbPokeball} from "react-icons/tb";
import {ListLoader, LoadingIcon} from "@/app/_styled/ListLoader.styled";
import Berry from "@/app/(routes)/berries/components/Berry/Berry";

const BerriesList = () => {
  const {berries, isError, isLoading, isSuccess} = useFetchBerries();

  return <BerriesListSection>
    {isLoading && <ListLoader>
      <LoadingIcon><TbPokeball/></LoadingIcon>
    </ListLoader>}


    {!isLoading && isSuccess && berries && (
      <>
        <BerryListHeading>
          <BerryCell $size="image"></BerryCell>
          <BerryCell $size="medium">Name</BerryCell>
          <BerryCell $size="small">Growth time</BerryCell>
          <BerryCell $size="small">Max harvest</BerryCell>
          <BerryCell $size="small">Size</BerryCell>
          <BerryCell $size="medium">Smoothness</BerryCell>
          <BerryCell $size="medium">Soil dryness</BerryCell>
          <BerryCell $size="medium">Firmness</BerryCell>
          <BerryCell $size="large">Flavors</BerryCell>
          <BerryCell $size="large">Natural gift type</BerryCell>
        </BerryListHeading>

        {berries.map(berry => (
          <Berry key={berry.name} berry={berry}/>
        ))}
      </>
    )}
  </BerriesListSection>
}

export default BerriesList