import { Helmet } from "react-helmet-async";

const SITE_URL = "https://portfolio-rithika0512.lovable.app";

const toAbsolute = (path: string) =>
  /^https?:\/\//i.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

export const Seo = ({ title, description, path }: SeoProps) => {
  const url = toAbsolute(path);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Rithika Girish" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
