import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import './index.css'

injectGlobal`
  body {
    display: block; !important
  }
`

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: `Christopher Pitt - CV ${
              data.site.siteMetadata.lastUpdated
            }`,
          },
          {
            name: 'keywords',
            content:
              'JavaScript, React, React-Native, Developer, Software, Web, WebDevelopment, ',
          },
        ]}
      />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
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
