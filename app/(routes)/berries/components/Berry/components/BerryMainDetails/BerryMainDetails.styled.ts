import styled from "styled-components";

interface extendedProps {
  $extended: boolean;
  $waitForAnimation: boolean;
}

export const MainDetails = styled.div<extendedProps>`
    display: flex;
    width: 100%;
    flex: 100%;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    transition: border 0.2s ease, background-color 0.2s ease, padding 0.2s ease;

    ${props => props.$extended && `
      height: 224px;
      border: 3px solid var(--gray-3);
      background-color: rgba(255,255,255, 0.1); 
      padding: 24px;
      border-radius: 4px;
    `}
`;

export const BerryName = styled.h3`
    flex: 0 0 80px;
    font-size: 14px;
    margin: 0;
    text-transform: capitalize;
`;

export const ImageContainer = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: auto;
    }
`;

const BerryCell = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    gap: 4px;
    font-size: 12px;
`;

export const BerryGrowthTime = styled(BerryCell)`
    flex: 0 0 62px;
`;

export const BerryMaxHarvest = styled(BerryCell)`
    flex: 0 0 62px;
`;

export const BerrySize = styled(BerryCell)`
    flex: 0 0 62px;
`;

export const BerrySmoothness = styled(BerryCell)`
    flex: 0 0 80px;
`;

export const BerrySoilDryness = styled(BerryCell)`
    flex: 0 0 80px;
`;

export const BerryFirmness = styled(BerryCell)`
    flex: 0 0 80px;
`;

export const BerryFlavors = styled(BerryCell)`
    flex: 0 0 200px;
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;
`;

export const BerryNaturalGiftType = styled(BerryCell)`
    flex: 0 0 62px;
`;