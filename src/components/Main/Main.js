import { usePokemon } from '../../hooks/pokemon.js';
import PokemonCard from '../PokemonCard/PokemonCard.js';
import Select from '../Select/Select.js';

import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading, selectedType } = usePokemon();
  // console.log('type', types);
  return (
    <main className="mainDisplay">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Select
            selectedType={selectedType}
            types={types}
            handleTypeChange={handleTypeChange}
            className="selectDisplay"
          />
          <div className="pokemonDisplay">
            {pokemon.map((pokemon) => (
              <PokemonCard key={pokemon._id} {...pokemon} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
