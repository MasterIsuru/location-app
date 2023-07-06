import { Layout } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const PageHeader = () => {
  const navigate = useNavigate();

  return (
    <Header className="page-header">
      <div className="demo-logo" onClick={() => navigate("/")}>
        Location App
      </div>
    </Header>
  );
};

export default PageHeader;
