import { FC } from "react";

import HomeContainer from "../../containers/HomeContainer";
import { MetaTag } from "../../components/MetaTag";

const HomePage: FC = () => {
  return (
    <>
      <MetaTag
        title="Location App - Home Page"
        name="Home Page"
        content="Home Page"
      />
      <HomeContainer />
    </>
  );
};

export default HomePage;
