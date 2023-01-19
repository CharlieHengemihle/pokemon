import { usePokemon } from '../hooks/pokemon.js';
import Select from './Select/Select.js';

export default function Main() {
  const { pokemon, types } = usePokemon();
  return (
    <>
      <Select types={types} />
      <div>
        {pokemon.map((poke) => (
          <p key={poke._id}>{poke.pokemon}</p>
        ))}
      </div>
    </>
  );
}
