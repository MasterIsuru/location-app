import { Helmet } from "react-helmet";

export const MetaTag = ({ title, name, content }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={name ? name : ""} content={content ? content : ""} />
    </Helmet>
  );
};
