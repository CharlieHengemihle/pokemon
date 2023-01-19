import { usePokemon } from '../../hooks/pokemon.js';
import PokemonCard from '../PokemonCard/PokemonCard.js';
import Select from '../Select/Select.js';

import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange } = usePokemon();
  console.log('type', types);

  return (
    <main className="mainDisplay">
      <Select types={types} handleTypeChange={handleTypeChange} className="selectDisplay" />
      <div className="pokemonDisplay">
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon._id} {...pokemon} />
        ))}
      </div>
    </main>
  );
}
