type Ability = {
    is_hidden: boolean;
    slot: number;
    ability: {
        name: string;
        url: string;
    };
};

type Form = {
    name: string;
    url: string;
};

type GameIndex = {
    game_index: number;
    version: {
        name: string;
        url: string;
    };
};

type VersionDetails = {
    rarity: number;
    version: {
        name: string;
        url: string;
    };
};

type HeldItem = {
    item: {
        name: string;
        url: string;
    };
    version_details: VersionDetails[];
};

type Move = {
    move: {
        name: string;
        url: string;
    };
    version_group_details: {
        level_learned_at: number;
        version_group: {
            name: string;
            url: string;
        };
        move_learn_method: {
            name: string;
            url: string;
        };
    }[];
};

type Species = {
    name: string;
    url: string;
};

type Sprite = {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        'official-artwork': {
            front_default: string | null;
            front_shiny: string | null;
        };
        showdown: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
    };
    versions: {
        [generation: string]: {
            [version: string]: {
                back_default: string | null;
                back_gray?: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_gray?: string | null;
                front_shiny: string | null;
            };
        };
    };
};

type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
};

type Type = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
};

type PastType = {
    generation: {
        name: string;
        url: string;
    };
    types: Type[];
};

export type PokemonType = "normal" | "fire" | "water" | "electric" | "grass" | "ice" | "fighting" | "poison" | "ground" | "flying" | "psychic" | "bug" | "rock" | "ghost" | "dragon" | "dark" | "steel" | "fairy";

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: Form[];
    game_indices: GameIndex[];
    held_items: HeldItem[];
    location_area_encounters: string;
    moves: Move[];
    species: Species;
    sprites: Sprite;
    cries: {
        latest: string;
        legacy: string;
    };
    stats: Stat[];
    types: Type[];
    past_types: PastType[];
};