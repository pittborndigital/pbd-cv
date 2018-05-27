import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: `Christopher Pitt - CV ${data.site.siteMetadata.lastUpdated}` },
          { name: 'keywords', content: 'JavaScript, React, React-Native, Developer, Software, Web, WebDevelopment, ' },
        ]}
      />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '30px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        lastUpdated
      }
    }
  }
`
