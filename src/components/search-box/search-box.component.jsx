const SearchBox = ({ placeholder, handleChange, value }) => {
  return (
    <input
      className="max-w-xs self-center p-4 text-lg"
      placeholder={placeholder}
      type="search"
      onChange={handleChange}
      value={value}
    />
  );
};

export default SearchBox;
