import React from 'react'

import {
  Container,
  ProfilePrimaryContainer,
  ProfileText,
  Title,
  Blurb,
  ProfilePictureContainer,
  ProfilePicture,
  ContactDetails,
  ContactItem,
  ContactText,
} from './styled'
import GithubIcon from '../icon/Github'
import MailIcon from '../icon/Mail'

const ProfileSummary = ({ title, blurb, profilePicture }) => (
  <ProfilePrimaryContainer>
    <ProfileText>
      <Title>{title}</Title>
      <Blurb>{blurb}</Blurb>
    </ProfileText>
    <ProfilePictureContainer>
      <ProfilePicture src={profilePicture} />
    </ProfilePictureContainer>
  </ProfilePrimaryContainer>
)

const ContactMe = ({ email, github }) => (
  <ContactDetails>
    <ContactItem rel="email" href={`mailto:${email}`}>
      <MailIcon fill="black" height={20} width={20} />
      <ContactText>{email}</ContactText>
    </ContactItem>
    <ContactItem target="_blank" href={github}>
      <GithubIcon fill="black" height={20} width={20} />
      <ContactText>{github}</ContactText>
    </ContactItem>
  </ContactDetails>
)

const Profile = ({ title, blurb, profilePicture, email, github }) => (
  <Container>
    <ProfileSummary
      title={title}
      blurb={blurb}
      profilePicture={profilePicture}
    />
    <ContactMe email={email} github={github} />
  </Container>
)

export default Profile
