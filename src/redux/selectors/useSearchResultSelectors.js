import { useSelector } from "react-redux";

const useSearchResultSelectors = () => {
  const selectedSearchResult = useSelector(
    (state) => state.searchResult.locations
  );

  return {
    selectedSearchResult,
  };
};

export { useSearchResultSelectors };
