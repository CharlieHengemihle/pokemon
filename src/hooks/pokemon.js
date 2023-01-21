import { useEffect } from 'react';
import { useState } from 'react';
import { fetchInitialPokemon, fetchTypes, fetchPokemon } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchInitialPokemon();
      setPokemon(data);
      setLoading(false);
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
    setLoading(true);
    if (type === 'all') {
      const allData = await fetchInitialPokemon();
      setPokemon(allData);
    } else {
      const data = await fetchPokemon(type);
      setPokemon(data);
    }
    setSelectedType(type);
    setLoading(false);
  };
  const handleSearch = async () => {
    setLoading(true);
    const data = await fetchPokemon(selectedType, query);
    setPokemon(data);
    setLoading(false);
  };

  return { pokemon, types, handleTypeChange, loading, selectedType, query, setQuery, handleSearch };
}
