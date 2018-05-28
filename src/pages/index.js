import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/PageWrapper'
import Profile from '../components/Profile'
import Timeline from '../components/Timeline'

const ProfileContainer = styled.div`
  @media print {
    page-break-after: always;
  }
`

const redirect = ({ location, history }) => {
  if (location.search) {
    const q = {}
    location.search
      .slice(1)
      .split('&')
      .forEach(v => {
        const a = v.split('=')
        q[a[0]] = a
          .slice(1)
          .join('=')
          .replace(/~and~/g, '&')
      })
    if (q.p !== undefined) {
      history.replaceState(
        null,
        null,
        `${location.pathname.slice(0, -1)}${q.p || ''}${q.q ? `?${q.q}` : ''}${
          location.hash
        }`,
      )
    }
  }
}

export default ({ data }) => {
  // handle SPA redirects from 404 page
  if (typeof window === 'object') redirect(window)

  const timeline = [
    ...data.job.edges.map(history => {
      const { html, frontmatter } = history.node
      const { title, employer, from, to, technologies } = frontmatter
      return {
        title,
        subtitle: employer,
        from,
        to,
        technologies,
        dateFormat: 'YYYY-MM',
        dateDisplayFormat: 'MMMM YYYY',
        description: html,
      }
    }),
    ...data.education.edges.map(history => {
      const { frontmatter } = history.node
      const { institution, course, grade, from, to, technologies } = frontmatter
      return {
        title: `${course} - ${grade}`,
        subTitle: institution,
        from,
        to,
        technologies,
        dateFormat: 'YYYY',
        dateDisplayFormat: 'YYYY',
      }
    }),
  ]

  return (
    <PageWrapper>
      <ProfileContainer>
        <Profile
          title={data.cvData.frontmatter.title}
          blurb={<p dangerouslySetInnerHTML={{ __html: data.cvData.html }} />}
          profilePicture={data.cvData.frontmatter.profilePicture.publicURL}
        />
      </ProfileContainer>
      <Timeline items={timeline} />
    </PageWrapper>
  )
}

export const query = graphql`
  query CVDataQuery {
    cvData: markdownRemark(
      fileAbsolutePath: {regex: "/cv.md$/"}
    ) {
      html,
      frontmatter {
        title,
        profilePicture {
          publicURL,
        }
      }
    },
    job: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___from]},
      filter: {fileAbsolutePath: {regex: "/(job)/.*\\.md$/"}}
    ) {
      totalCount,
      edges {
        node {
          html,
          frontmatter {
            from,
            to,
            title,
            employer,
            technologies,
            location,
          }
        }
      }
    },
    education: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___from]},
      filter: {fileAbsolutePath: {regex: "/(education)/.*\\.md$/"}}
    ) {
      totalCount,
      edges {
        node {
          html,
          frontmatter {
            from,
            to,
            institution,
            course,
            grade,
            technologies,
            location,
          }
        }
      }
    }
  }
`
