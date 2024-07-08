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
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;
    transition: border 0.2s ease, background-color 0.2s ease, padding 0.2s ease;

    ${props => props.$extended && `
      height: 224px;
      border: 3px solid var(--gray-3);
      background-color: rgba(255,255,255, 0.1); 
      padding: 24px;
      border-radius: 4px;
    `};

    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`;

export const MobileLabel = styled.div`
    display: none;

    @media (max-width: 991px) {
        display: block;
        font-size: 11px;
        flex: 0 0 100%;
        color: var(--gray-5);
        white-space: nowrap;
    }
`;

const BerryCell = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    font-size: 12px;
`;

const SmallCell = styled(BerryCell)`
    flex: 0 0 62px;

    @media (max-width: 991px) {
        flex: 0 0 calc(33.33% - (126px / 3) - 10px);
    }

    @media (max-width: 575px) {
        flex: 0 0 calc(33.33% - 10px);
    }
`;

const MediumCell = styled(BerryCell)`
    flex: 0 0 80px;

    @media (max-width: 991px) {
        flex: 0 0 calc(33.33% - (126px / 3) - 10px);
    }
    
    @media (max-width: 575px) {
        flex: 0 0 calc(33.33% - 10px);
    }
`;

export const BerryImage = styled(BerryCell)`
    flex: 0 0 36px;
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

export const BerryName = styled.h3`
    flex: 0 0 80px;
    font-size: 14px;
    margin: 0;
    text-transform: capitalize;
    
    @media (max-width: 575px) {
        flex: 0 0 calc(100% - 36px - 10px);
    }
`;

export const BerryGrowthTime = styled(SmallCell)``;
export const BerryMaxHarvest = styled(SmallCell)``;
export const BerrySize = styled(SmallCell)``;
export const BerrySmoothness = styled(MediumCell)`
    @media (min-width: 576px) and (max-width: 991px) {
        margin-left: 136px;
    }
`;
export const BerrySoilDryness = styled(MediumCell)``
export const BerryFirmness = styled(MediumCell)``;
export const BerryNaturalGiftType = styled(SmallCell)``;

export const BerryFlavors = styled(BerryCell)`
    flex: 0 0 200px;
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;

    @media (max-width: 991px) {
        margin-left: 136px;
        flex: 0 0 calc(50% - (136px / 2) - (10px / 2));
    }

    @media (max-width: 575px) {
        margin-left: 0;
    }
    
    @media screen and (max-width: 575px) {
        flex: 0 0 calc(50% - (10px / 2));
    }
`;

export const BerryTypes = styled(BerryCell)`
    flex: 1 0 auto;

    @media (max-width: 991px) {
        padding-left: 136px;
        flex: 0 0 100%;
    }

    @media (max-width: 991px) {
        padding-left: 0;
        flex: 0 0 calc(50% - (136px / 2) - (10px / 2));
    }

    @media screen and (max-width: 575px) {
        flex: 0 0 calc(50% - (10px / 2));
    }
`;