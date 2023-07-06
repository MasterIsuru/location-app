import { useMemo, useState } from "react";
import { Input, List } from "antd";

import { useSearchResultSelectors } from "../../redux/selectors/useSearchResultSelectors";

const UserSearchResultContainer = () => {
  const [value, setValue] = useState("");

  const { selectedSearchResult } = useSearchResultSelectors();

  const resultData = useMemo(() => {
    if (!(selectedSearchResult && selectedSearchResult.length)) {
      return [];
    }
    if (!value) {
      return selectedSearchResult;
    }
    const filtered = selectedSearchResult.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    return filtered;
  }, [value, selectedSearchResult]);

  return (
    <div className="page-container">
      <span>Search Previous Search Results</span>
      <Input.Search
        value={value}
        allowClear
        className="search-field"
        placeholder="Search previous search results"
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
      />
      <div className="search-result-container">
        <List
          dataSource={resultData}
          pagination={{ position: "bottom", align: "end", pageSize: 5 }}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default UserSearchResultContainer;
