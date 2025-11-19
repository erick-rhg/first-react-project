import { Card } from "../UI/Card/Card";
import type { Pokemon } from "../../types/index";
import styles from "./Pokemon.module.css";

interface PokemonCardProps {
  pokemon: Pokemon;
  onToggleTeam: (id: number) => void;
  isSelected: boolean;
}

export const PokemonCard = ({
  pokemon,
  onToggleTeam,
  isSelected,
}: PokemonCardProps) => {
  
  const handleToggle = () => {
    onToggleTeam(pokemon.id);
  };

  return (
      <Card
        className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      >
        <img className={styles.pokemonImg} src={pokemon.image} alt="" />
        <div>
          <h2>{pokemon.name} </h2>
          <p>{pokemon.type} </p>
        </div>
        <button
        type="button"
          className={isSelected ? styles.btnRemove : styles.btnAdd}
          onClick={handleToggle}
        >
          {isSelected ? "Quitar" : "Añadir"}
        </button>
      </Card>
  );
};
