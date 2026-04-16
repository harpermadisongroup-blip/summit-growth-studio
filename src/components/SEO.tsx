import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
}

const SITE_NAME = "Allied Digital Strategies";

const SEO = ({ title, description }: SEOProps) => (
  <Helmet>
    <title>{`${title} | ${SITE_NAME}`}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} | ${SITE_NAME}`} />
    <meta property="og:description" content={description} />
  </Helmet>
);

export default SEO;
