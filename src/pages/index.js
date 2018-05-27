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

export default () => {
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
