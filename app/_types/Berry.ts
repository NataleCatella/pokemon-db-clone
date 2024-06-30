interface Firmness {
  name: string;
  url: string;
}

export interface Flavor {
  potency: number,
  flavor: {
    name: string;
    url: string;
  }
}

interface Item {
  name: string;
  url: string;
}

interface NaturalGiftType {
  name: string;
  url: string;
}

export type Berry = {
  id: number,
  name: string,
  growth_time: number,
  max_harvest: number,
  natural_gift_power: number,
  size: number,
  smoothness: number,
  soil_dryness: number,
  firmness: Firmness,
  flavors: Flavor[],
  item: Item,
  natural_gift_type: NaturalGiftType
}