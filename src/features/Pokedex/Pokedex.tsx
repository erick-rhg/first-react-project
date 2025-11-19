import { SearchBar } from "../../components/SearchBar/SearchBar";
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { useState } from "react";
import { useTeam } from "../../hooks/useTeam";
import { FilterToggle } from "../../components/FilterToggle/FilterToggle";
import styles from "./Pokedex.module.css";

export const Pokedex = () => {
  const { pokemonList, isLoading, error } = usePokemon();
  const { team, isPokemonInTeam, togglePokemonInTeam } = useTeam();
  const [search, setSearch] = useState<string>("");
  const [isTeamFilterActive, setIsTeamFilterActive] = useState<boolean>(false);
  
  const filteredPokemon = pokemonList.filter((pokemon) => {
    const normalizePokemon = pokemon.name.toLowerCase();
    const normalizeNewValue = search.toLowerCase();
    return normalizePokemon.includes(normalizeNewValue);
  });

  const sourceList = isTeamFilterActive ? team : filteredPokemon;

  const handleToggleTeam = (id: number) => {
    const pokemonSelected = pokemonList.find((item) => item.id === id);

    if (pokemonSelected) {
      togglePokemonInTeam(pokemonSelected);
    }
  };

  if (isLoading) return <div>Cargando Pokédex. . .</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.pokedexContainer}>
      <h1>Pokédex Manager</h1>
      <div>Equipo actual {team.length} / 6</div>
      <FilterToggle
        label=" Ver solo mi equipo"
        isActive={isTeamFilterActive}
        onToggle={()=> setIsTeamFilterActive(prev => !prev)}
      />
      {isTeamFilterActive && team.length === 0 && (
        <p>Aún no tienes Pokémon en tu equipo</p>
      )}
      <SearchBar value={search} onChange={setSearch}></SearchBar>
      <div className={styles.gridPokemonCard}>
        {sourceList.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isSelected={isPokemonInTeam(pokemon.id)}
              onToggleTeam={handleToggleTeam}
            />
          );
        })}
      </div>
    </div>
  );
};
