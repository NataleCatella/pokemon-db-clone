import {Berry} from "@/app/_types/Berry";
import {ErrorMessage} from "@/app/_styled/ErrorMessage.styled";
import {LoadingContainer} from "@/app/_styled/CardLoader";
import {TbPokeball} from "react-icons/tb";
import {
  BerryFirmness, BerryFlavors,
  BerryGrowthTime, BerryMaxHarvest,
  BerryName, BerryNaturalGiftType, BerrySize, BerrySmoothness, BerrySoilDryness,
  ImageContainer,
  MainDetails
} from "./BerryMainDetails.styled";
import BerryFlavor from "@/app/(routes)/berries/components/Berry/components/BerryFlavor/BerryFlavor";
import {
  PokemonTypePill
} from "@/app/(routes)/pokemon-list/components/Pokemon/components/PokemonMainDetails/PokemonMainDetails.styled";
import type {PokemonType} from "@/app/_types/Pokemon";

interface BerryMainDetailsProps {
  berryDetail: Berry | undefined;
  extended: boolean;
  waitForAnimation: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const BerryMainDetails: React.FC<BerryMainDetailsProps> = ({
                                                             berryDetail,
                                                             extended,
                                                             waitForAnimation,
                                                             isLoading,
                                                             isError,
                                                             isSuccess
                                                           }) => {
  return <MainDetails $extended={extended}
                      $waitForAnimation={waitForAnimation}>
    {isLoading && <LoadingContainer $position="left"><TbPokeball/></LoadingContainer>}

    <ImageContainer>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${berryDetail?.name}-berry.png`}
        alt={berryDetail?.name}/>
    </ImageContainer>

    <BerryName>{berryDetail?.name}</BerryName>

    <BerryGrowthTime>{berryDetail?.growth_time}</BerryGrowthTime>
    <BerryMaxHarvest>{berryDetail?.max_harvest}</BerryMaxHarvest>
    <BerrySize>{berryDetail?.size}</BerrySize>
    <BerrySmoothness>{berryDetail?.smoothness}</BerrySmoothness>
    <BerrySoilDryness>{berryDetail?.soil_dryness}</BerrySoilDryness>
    <BerryFirmness>{berryDetail?.firmness?.name}</BerryFirmness>
    <BerryFlavors>
      {berryDetail?.flavors.map(flavor => <BerryFlavor flavor={flavor} key={flavor.flavor.name}></BerryFlavor>)}
    </BerryFlavors>
    <PokemonTypePill key={berryDetail?.natural_gift_type.name}
                     $type={berryDetail?.natural_gift_type.name.toLowerCase() as PokemonType}>
      {berryDetail?.natural_gift_type.name}
    </PokemonTypePill>

    {isError && <ErrorMessage>
      Error: It has not been possible to complete the request. <br/>
      Please try again later.
    </ErrorMessage>}
  </MainDetails>;
}

export default BerryMainDetails;