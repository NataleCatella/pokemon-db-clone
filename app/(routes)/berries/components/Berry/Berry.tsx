import type {Berry} from "@/app/_types/Berry";
import {BerryCard, BerryContent, BerryExtendedContainer} from "@/app/(routes)/berries/components/Berry/Berry.styled";
import BerryMainDetails from "./components/BerryMainDetails/BerryMainDetails";
import {useState} from "react";
import {motion} from "framer-motion";
import useFetchBerryDetails from "@/app/(routes)/berries/components/Berry/hooks/useFetchBerryDetails";

interface BerryProps {
  berry: Berry
}

const Berry: React.FC<BerryProps> = ({berry}) => {
  const {berryDetail, isError, isLoading} = useFetchBerryDetails(berry.name);
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isWaitForAnimation, setIsWaitForAnimation] = useState(false)

  const handleClick = () => {
    setIsDetailOpen((prev) => !prev);
  }

  return <BerryCard $extended={isDetailOpen}
                    $zHigher={isWaitForAnimation}>
    <BerryExtendedContainer $extended={isDetailOpen}
                            onClick={handleClick}
                            as={motion.div}
                            layout>
      <BerryContent $error={isError}
                    $extended={isDetailOpen}
                    as={motion.div}
                    layout>
        <BerryMainDetails berryDetail={berryDetail}
                          extended={isDetailOpen}
                          waitForAnimation={isWaitForAnimation}
                          isLoading={isLoading}
                          isError={isError}
                          isSuccess/>

        {/*<AnimatePresence>*/}
        {/*  {isDetailOpen && <BerryAdditionalDetails berryDetail={berryDetail}/>*/}
        {/*</AnimatePresence>*/}
      </BerryContent>
    </BerryExtendedContainer>
  </BerryCard>
}

export default Berry