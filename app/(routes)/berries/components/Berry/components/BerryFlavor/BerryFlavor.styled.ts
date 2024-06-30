import styled from "styled-components";
import {Flavor} from "@/app/_types/Berry";

const flavorsStyle = {
    spicy: `
        background: var(--red-7);
        color: var(--red-1);
    `,
    dry: `
        background: var(--amber-7);
        color: var(--amber-1);
    `,
    sweet: `
        background: var(--pink-7);
        color: var(--pink-1);
    `,
    bitter: `
        background: var(--blue-7);
        color: var(--blue-1);
    `,
    sour: `
        background: var(--green-7);
        color: var(--green-1);
    `,
}

interface FlavorPillProps {
    $flavor: Flavor;
}

type flavors = keyof typeof flavorsStyle

export const FlavorPill = styled.div<FlavorPillProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 6px;
    border-radius: 5px;
    font-size: 11px;
    text-transform: capitalize;
    ${props => flavorsStyle[props.$flavor?.flavor.name as flavors || "spicy"]}
`