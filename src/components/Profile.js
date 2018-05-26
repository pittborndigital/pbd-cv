import React from 'react'
import styled from 'styled-components'

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

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;

  ${ProfileText} {
    padding-right: 50px;
    @media (max-width: 700px) {
      padding-right: 0px;
    }
  }

  ${ProfilePicture} {
    @media (max-width: 700px) {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const Profile = ({ title, blurb, profilePicture }) => (
  <Container>
    <ProfileText>
      <Title>{title}</Title>
      <Blurb>{blurb}</Blurb>
    </ProfileText>
    <ProfilePicture src={profilePicture} />
  </Container>
)

export default Profile
