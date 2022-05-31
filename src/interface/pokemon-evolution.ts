export interface EvolutionChain {
  id:                number;
  baby_trigger_item: null;
  chain:             Chain;
}

export interface Chain {
  is_baby:           boolean;
  evolution_details: EvolutionDetail[] | null;
  evolves_to:        Chain[];
}

export interface EvolutionDetail {
  item:                    null;
  gender:                  null;
  held_item:               null;
  known_move:              null;
  known_move_type:         null;
  location:                null;
  min_level:               number;
  min_happiness:           null;
  min_beauty:              null;
  min_affection:           null;
  needs_overworld_rain:    boolean;
  party_species:           null;
  party_type:              null;
  relative_physical_stats: null;
  time_of_day:             string;
  trade_species:           null;
  turn_upside_down:        boolean;
}
