import {Heading, BerryCell} from "./BerryListHeading.styled";

const BerryListHeading = () => {
  return <Heading>
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
  </Heading>
}

export default BerryListHeading