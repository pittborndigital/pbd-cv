import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  padding: 30px 130px 30px 30px;
  min-height: 100px;
`

const Title = styled.h1``

const Blurb = styled.p``

const ProfilePicture = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  border-radius: 50%;
`

const Profile = ({ title, blurb, profilePicture }) => (
  <Container>
    <Title>{title}</Title>
    <Blurb>{blurb}</Blurb>
    <ProfilePicture>
      <Image src={profilePicture} />
    </ProfilePicture>
  </Container>
)

export default Profile
