import React from 'react'
import styled from 'styled-components'

import GithubIcon from './icon/Github'
import MailIcon from './icon/Mail'

const ProfileText = styled.div``
const Title = styled.h1`
  line-height: 1.6em;
  margin-bottom: 30px;
`
const Blurb = styled.div`
  line-height: 1.6em;
  margin: 0;
  font-size: 1.3em;
`

const Container = styled.div``

const ProfilePictureContainer = styled.div`
  height: 150px;
  width: 150px;
`
const ProfilePicture = styled.img`
  height: 150px;
  width: 150px;
  max-width: initial;
  margin: 0;
  border-radius: 50%;
`

const ProfilePrimaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  ${ProfileText} {
    padding-right: 50px;
    @media only screen and (max-width: 700px) {
      padding-right: 0px;
    }
  }

  ${ProfilePictureContainer} {
    @media only screen and (max-width: 700px) {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 700px) {
    align-items: center;
  }
`

const ContactItem = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`

const ContactText = styled.span`
  margin-left: 10px;
`

const Profile = ({ title, blurb, profilePicture, email, github }) => (
  <Container>
    <ProfilePrimaryContainer>
      <ProfileText>
        <Title>{title}</Title>
        <Blurb>{blurb}</Blurb>
      </ProfileText>
      <ProfilePictureContainer>
        <ProfilePicture src={profilePicture} />
      </ProfilePictureContainer>
    </ProfilePrimaryContainer>
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
  </Container>
)

export default Profile
