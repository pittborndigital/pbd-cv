import React from 'react'

import PageWrapper from '../components/common/PageWrapper'
import PageDivider from '../components/common/PageDivider'
import GithubCorner from '../components/common/GithubCorner'
import Profile from '../components/Profile'
import Timeline from '../components/Timeline'
import { handleGHPagesRedirect } from '../module/routing'

export default ({ data }) => {
  // handle SPA redirects from 404 page
  if (typeof window === 'object') handleGHPagesRedirect(window)

  const timeline = [
    ...data.job.edges.map(history => {
      const { html, frontmatter } = history.node
      const { title, employer, from, to, technologies } = frontmatter
      return {
        title,
        subTitle: employer,
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

  const {
    title,
    profilePicture,
    contactEmail,
    github,
    quickDescription,
  } = data.cvData.frontmatter

  return (
    <PageWrapper>
      <GithubCorner url="https://github.com/pittborndigital/pbd-cv" />
      <Profile
        title={title}
        blurb={<p dangerouslySetInnerHTML={{ __html: data.cvData.html }} />}
        quickDescription={quickDescription}
        profilePicture={profilePicture.publicURL}
        email={contactEmail}
        github={github}
      />
      <PageDivider />
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
        contactEmail,
        github,
        profilePicture {
          publicURL,
        },
        quickDescription
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
