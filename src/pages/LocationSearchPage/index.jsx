import { FC } from "react";

import LocationSearchContainer from "../../containers/LocationSearchContainer";
import { MetaTag } from "../../components/MetaTag";

const LocationSearchPage: FC = () => {
  return (
    <>
      <MetaTag
        title="Location App - Location Search Page"
        name="Location Search Page"
        content="Location Search Page"
      />
      <LocationSearchContainer />
    </>
  );
};

export default LocationSearchPage;
