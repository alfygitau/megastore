import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSelector } from "react-redux";

const Search = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  const formatResult = (item) => {
    return (
      <div>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
          description: {item.description}
        </span>
      </div>
    );
  };
  return (
    <div style={{ width: 600 }}>
      <ReactSearchAutocomplete
        items={products}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        styling={{
          zIndex: 3,
          borderRadius: "0",
          height: "35px",
          lineColor: "none",
        }}
        formatResult={formatResult}
        autoFocus
        showClear={false}
      />
    </div>
  );
};

export default Search;
