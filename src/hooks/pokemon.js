import { useEffect } from 'react';
import { useState } from 'react';
import { fetchInitialPokemon, fetchTypes, fetchPokemon } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitialPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    const data = await fetchPokemon(type);
    setPokemon(data);
  };

  return { pokemon, types, handleTypeChange };
}
