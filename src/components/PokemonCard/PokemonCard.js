import './PokemonCard.css';

export default function PokemonCard({ pokemon, type_1, type_2, url_image, height, weight }) {
  return (
    <div className="pokemoncard">
      <img src={url_image} alt={pokemon} />
      <h2>{pokemon}</h2>
      <p>
        {type_1} {type_2}
      </p>
      <p>
        Height:{height} ft Weight:{weight} lbs
      </p>
    </div>
  );
}
