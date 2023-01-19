import { useEffect } from 'react';
import { useState } from 'react';
import { fetchInitialPokemon } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitialPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  return { pokemon };
}
