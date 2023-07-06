import { useState } from "react";
import { Input, List, message } from "antd";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";

import { useSearchResultActions } from "../../redux/actions/useSearchResultActions";
import { useSearchResultSelectors } from "../../redux/selectors/useSearchResultSelectors";

const LocationSearchContainer = () => {
  const [value, setValue] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const { selectedSearchResult } = useSearchResultSelectors();
  const { addSearchResultsDispatch } = useSearchResultActions();
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

  const onClickSearchResult = (value) => {
    setValue(value);
    if (selectedSearchResult.includes(value)) {
      return;
    }
    addSearchResultsDispatch(value);
    messageApi.success("Search result saved!");
  };

  return (
    <div>
      {contextHolder}
      <div className="page-container">
        <span>Location Search</span>
        <Input.Search
          value={value}
          allowClear
          className="search-field"
          placeholder="Search your location"
          onChange={(evt) => {
            getPlacePredictions({ input: evt.target.value });
            setValue(evt.target.value);
          }}
          loading={isPlacePredictionsLoading}
        />
        <div className="search-result-container">
          {!isPlacePredictionsLoading && (
            <List
              dataSource={placePredictions}
              renderItem={(item) => (
                <List.Item
                  className="cursor-pointer"
                  onClick={() => onClickSearchResult(item.description)}
                >
                  <List.Item.Meta title={item.description} />
                </List.Item>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationSearchContainer;
