import React from 'react'
import styled from 'styled-components'

import MailIcon from './icon/Mail'

const ProfileText = styled.div``
const Title = styled.h1`
  line-height: 1.8em;
  margin-bottom: 40px;
`
const Blurb = styled.p`
  line-height: 1.7em;
  margin: 0;
  font-size: 1.3em;
`

const Container = styled.div`
  margin-bottom: 80px;
`

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
  margin-bottom: 30px;

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
  flex-direction: row;
  justify-content: flex-end;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

const Email = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const EmailAddress = styled.span`
  margin-left: 10px;
`

const Profile = ({ title, blurb, profilePicture, email }) => (
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
    {email && (
      <ContactDetails>
        <Email rel="email" href={`mailto:${email}`}>
          <MailIcon fill="black" height={20} width={20} />
          <EmailAddress>{email}</EmailAddress>
        </Email>
      </ContactDetails>
    )}
  </Container>
)

export default Profile
