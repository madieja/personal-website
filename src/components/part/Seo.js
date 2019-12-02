import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";


const DATA = graphql`
      query {
      site {
          siteMetadata {
          title
          description
          author
          keywords
          }
      }
      }
  `

const SEO = ({ data, description, lang, meta, keywords, title }) => {
  const {site} = data;
    const metaDescription = description || site.siteMetadata.description;
    const metaKeywords = keywords || site.siteMetadata.keywords;

 
    return <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} - %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaKeywords.length > 0
            ? {
                name: `keywords`,
                content: metaKeywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
  }
  
  SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
  }


export default props => <StaticQuery 
  query={DATA} 
  render={data => (
    <SEO data={data} props {...props} />
  )}
  />

