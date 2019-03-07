import React from 'react'

import {
  Container,
  ProfilePrimaryContainer,
  ProfileText,
  ProfileQuickDescription,
  Title,
  Blurb,
  ProfilePictureContainer,
  ProfilePicture,
  ContactDetails,
  ContactItem,
  ContactText,
} from './styled'
import GithubIcon from '../common/icon/Github'
import MailIcon from '../common/icon/Mail'

const ProfileSummary = ({ title, blurb, profilePicture, quickDescription }) => (
  <ProfilePrimaryContainer>
    <ProfileText>
      <Title>{title}</Title>
      <Blurb>{blurb}</Blurb>
      {!!quickDescription && (
        <ProfileQuickDescription>{quickDescription}</ProfileQuickDescription>
      )}
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

const Profile = ({
  title,
  blurb,
  profilePicture,
  email,
  github,
  quickDescription,
}) => (
  <Container>
    <ProfileSummary
      title={title}
      blurb={blurb}
      profilePicture={profilePicture}
      quickDescription={quickDescription}
    />
    <ContactMe email={email} github={github} />
  </Container>
)

export default Profile
