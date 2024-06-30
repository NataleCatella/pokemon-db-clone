import {FlavorPill} from "@/app/(routes)/berries/components/Berry/components/BerryFlavor/BerryFlavor.styled";
import {Flavor} from "@/app/_types/Berry";

interface BerryFlavorProps {
  flavor: Flavor
}

const BerryFlavor = ({flavor}: BerryFlavorProps) => {
  return flavor.potency > 0 && <FlavorPill $flavor={flavor}>{flavor.flavor.name}</FlavorPill>;
}

export default BerryFlavor