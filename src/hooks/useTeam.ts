import { useState } from "react";
import type { Pokemon } from "../types";

export const useTeam = () => {
  const [team, setTeam] = useState<Pokemon[]>([]);

  const isPokemonInTeam = (id: number): boolean => {
    return team.some((item) => item.id === id);
  };

  const togglePokemonInTeam = (pokemon: Pokemon) => {
    const isSelected = isPokemonInTeam(pokemon.id);

    if (isSelected) {
      setTeam((prev) => prev.filter((item) => item.id !== pokemon.id));
    } else {
      if (team.length >= 6) {
        alert("Equipo Completo");
        return;
      }
      setTeam((prev) => [...prev, pokemon]);
    }
  };

  return { team, isPokemonInTeam, togglePokemonInTeam };
};
