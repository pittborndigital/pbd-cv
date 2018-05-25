import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

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
    <Timeline
      items={cvData.jobHistory}
    />
  </PageWrapper>
);
