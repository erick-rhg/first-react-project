import { useState, useEffect } from "react";
import type { Pokemon, PokemonApiResponse } from "../types";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Ha ocurrido un problema en la conexión");
        }
        const data: PokemonApiResponse = await response.json();
        const transformList: Pokemon[] = data.results.map((item, index) => {
          const id = index + 1;
          return {
            id: id,
            name: item.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            type: "unknow",
          };
        });
        setPokemonList(transformList);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  return { pokemonList, isLoading, error };
};
