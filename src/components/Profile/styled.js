import styled from 'styled-components'

export const Container = styled.div``

export const ProfileText = styled.div``

export const Title = styled.h1`
  line-height: 1.6em;
  margin-bottom: 30px;
`
export const Blurb = styled.div`
  line-height: 1.6em;
  margin: 0;
  font-size: 1.3em;
`

export const ProfilePictureContainer = styled.div`
  height: 150px;
  width: 150px;
`
export const ProfilePicture = styled.img`
  height: 150px;
  width: 150px;
  max-width: initial;
  margin: 0;
  border-radius: 50%;
`

export const ProfilePrimaryContainer = styled.div`
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

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 700px) {
    align-items: center;
  }
`

export const ContactItem = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`

export const ContactText = styled.span`
  margin-left: 10px;
`
