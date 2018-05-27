import React from 'react'
import styled from 'styled-components'

import cvData from '../data/cv'
import PageWrapper from '../components/PageWrapper'
import Profile from '../components/Profile'
import Timeline from '../components/Timeline'
import profilePicture from '../data/ProfilePic.jpg'

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

export default () => {
  if (typeof window === 'object') redirect(window)

  const timeline = [
    ...cvData.jobHistory.map(history => {
      return {
        ...history,
        title: history.jobTitle,
        subTitle: history.employer,
        dateFormat: 'YYYY-MM',
        dateDisplayFormat: 'MMMM YYYY',
      }
    }),
    ...cvData.educationHistory.map(history => {
      return {
        ...history,
        title: `${history.course} - ${history.grade}`,
        subTitle: history.institution,
        dateFormat: 'YYYY',
        dateDisplayFormat: 'YYYY',
      }
    }),
  ]
  return (
    <PageWrapper>
      <ProfileContainer>
        <Profile
          title={cvData.title}
          blurb={cvData.blurb}
          profilePicture={profilePicture}
        />
      </ProfileContainer>
      <Timeline items={timeline} />
    </PageWrapper>
  )
}
