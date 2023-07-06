import { FC } from "react";

import UserSearchResultContainer from "../../containers/UserSearchResultContainer";
import { MetaTag } from "../../components/MetaTag";

const UserSearchResultPage: FC = () => {
  return (
    <>
      <MetaTag
        title="Location App - User Search Result Page"
        name="User Search Result Page"
        content="User Search Result Page"
      />
      <UserSearchResultContainer />
    </>
  );
};

export default UserSearchResultPage;
