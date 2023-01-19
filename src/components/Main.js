import { usePokemon } from '../hooks/pokemon.js';
import PokemonCard from './PokemonCard/PokemonCard.js';
import Select from './Select/Select.js';

export default function Main() {
  const { pokemon, types, handleTypeChange } = usePokemon();
  console.log('type', types);

  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <div>
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon._id} {...pokemon} />
        ))}
      </div>
    </>
  );
}
