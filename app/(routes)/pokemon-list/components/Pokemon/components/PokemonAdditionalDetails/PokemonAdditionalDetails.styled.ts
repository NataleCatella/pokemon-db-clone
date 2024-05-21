import styled from 'styled-components';

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

interface DetailRowProps {
  $noWrap?: boolean
}

export const DetailRow = styled.div<DetailRowProps>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 8px;
    gap: 8px;

    ${props => props.$noWrap && `
        flex-wrap: nowrap;
    `}
`;

export const Label = styled.span`
    font-weight: bold;
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 2px 10px;
    color: var(--gray-10);
`;

export const Value = styled.span`
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
    font-weight: bold;
    color: var(--gray-12);
`;

export const Ability = styled.span`
    display: block;
    font-size: 11px;
    margin-right: 4px;
    margin-bottom: 4px;
    color: var(--gray-12);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 2px 10px;
`;

export const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: auto;
    max-height: 200px;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
    padding-right: 8px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const Move = styled.span`
    display: block;
    font-size: 11px;
    margin-right: 4px;
    margin-bottom: 4px;
    color: var(--gray-12);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 2px 10px;
`;