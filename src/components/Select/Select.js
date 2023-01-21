export default function Select({ types, handleTypeChange, selectedType }) {
  return (
    <select defaultValue={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
      <option value="all">all</option>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
