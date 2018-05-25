import React from 'react'

import cvData from '../data/cv'
import PageWrapper from '../components/PageWrapper'
import Profile from '../components/Profile'
import Timeline from '../components/Timeline'
import profilePicture from '../data/ProfilePic.jpg'

export default () => (
  <PageWrapper>
    <Profile
      title={cvData.title}
      blurb={cvData.blurb}
      profilePicture={profilePicture}
    />
    <Timeline items={cvData.jobHistory} />
  </PageWrapper>
)
