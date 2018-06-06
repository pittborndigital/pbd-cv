import styled, { css } from 'styled-components'

export const TimelineContainer = styled.div``

export const TimelineWrapper = styled.div`
  position: relative;
`

export const TimelineContinuum = styled.div`
  position: absolute;
  top: 15px;
  bottom: 0;
  left: 0;
  background-color: grey;
  width: 1px;
  z-index: 1;
`

export const TimelineItems = styled.div`
  width: 100%;
`

export const TimelineIndicator = styled.div`
  position: absolute;
  top: 0;
  left: -15px;
  right: 0;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: white;
  border: 1px solid coral;
  z-index: 3;

  @media only screen and (max-width: 700px) {
    height: 20px;
    width: 20px;
    left: -10px;
  }
`

export const TimelineItemContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
  min-height: 100px;
  padding: 0 0 30px 30px;
  ${props =>
    props.active &&
    css`
      ${TimelineIndicator} {
        background-color: coral;
      }
    `}
    
    @media only print {
      page-break-inside: avoid;
      margin-bottom: 75px;
    }
  }
  @media only screen and (max-width: 700px) {
    padding-left: 20px;
  }
`

export const TimelineItemDescription = styled.div`
  padding: 10px 0;
  font-size: 1.1em;
  line-height: 1.5em;
  p {
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 1em;
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  }
`

export const TimelineTechnologies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  & > * {
    margin: 10px 0;
    padding: 0;
    flex-basis: 25%;
    min-height: 50px;
  }
  @media only screen and (max-width: 1000px) {
    & > * {
      flex-basis: 33.33%;
    }
  }
  @media only screen and (max-width: 700px) {
    & > * {
      flex-basis: 50%;
    }
  }
`

export const TimelineTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const TimelineItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
`

export const TimelineItemTitle = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
  text-align: left;
`

export const TimelineItemSubTitle = styled.h5`
  font-size: 0.8em;
  margin: 0;
  margin-bottom: 10px;
`

export const TimelineItemTitleDetail = styled.div`
  font-size: 1em;
`
