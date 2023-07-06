import { FC } from "react";

import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

import { MetaTag } from "../../components/MetaTag";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <MetaTag
        title="Location App"
        name="Location App"
        content="Location App"
      />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        className="mt-px-30"
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    </>
  );
};

export default NotFoundPage;
