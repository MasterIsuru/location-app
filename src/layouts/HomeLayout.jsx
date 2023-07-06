import { Breadcrumb, Layout } from "antd";
import { useLocation } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

const { Content } = Layout;

const HomeLayout = ({ children }) => {
  const location = useLocation();

  const renderBreadcrumb = () => {
    if (location.pathname === "/") {
      return null;
    }
    const value = location.pathname.replace("/", "").replaceAll("-", " ");
    return (
      <Breadcrumb.Item className="text-transform-capitalize">
        {value}
      </Breadcrumb.Item>
    );
  };

  return (
    <Layout>
      <PageHeader />
      <Content className="site-layout">
        <Breadcrumb className="breadcrumb-container">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          {renderBreadcrumb()}
        </Breadcrumb>
        <div className="page-content">{children}</div>
      </Content>
      <PageFooter />
    </Layout>
  );
};

export default HomeLayout;
