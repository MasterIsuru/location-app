import React from "react";
import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";

import RoutePaths from "../../routes/RoutePaths";

const HomeContainer = () => {
  const navigate = useNavigate();

  return (
    <Row>
      <Col span={12} className="text-align-center pt-px-140">
        <Button onClick={() => navigate(RoutePaths.locationSearch)}>
          Search locations with google
        </Button>
      </Col>
      <Col span={12} className="text-align-center pt-px-140">
        <Button onClick={() => navigate(RoutePaths.userSearchResults)}>
          Search previously search results
        </Button>
      </Col>
    </Row>
  );
};

export default HomeContainer;
