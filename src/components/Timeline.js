import React from 'react'
import styled, { css } from 'styled-components'

import TechnologyBadge from './TechnologyBadge'

const Container = styled.div`
  padding: 30px;
`

const TimelineWrapper = styled.div`
  position: relative;
`

const TimelineContinuum = styled.div`
  position: absolute;
  top: 15px;
  bottom: 0;
  left: 0;
  background-color: grey;
  width: 1px;
  z-index: 1;
`

const TimelineItems = styled.div`
  width: 100%;
`

const TimelineItemContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
  min-height: 100px;
  padding: 0 30px 50px;
`

const TimelineIndicator = styled.div`
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
`

const TimelineItemTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
`

const TimelineItemTitle = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  text-align: left;
`

const TimelineItemSubTitle = styled.h5`
  font-size: 0.8em;
  font-weight: normal;
  margin: 0;
  text-align: right;
`

const TimelineItemDetail = styled.div`
  font-size: 1em;
  margin-bottom: 15px;
`

const TimelineItemDescription = styled.p`
  padding: 10px 0;
  font-size: 1.1em;
`

const TimelineTechnologies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const TimelineItem = (props) => (
  <TimelineItemContainer index={props.index}>
    <TimelineIndicator />
    <TimelineItemTitleContainer>
      <TimelineItemTitle>{props.jobTitle}</TimelineItemTitle>
      <TimelineItemSubTitle><span>{props.from}</span> to <span>{props.to}</span></TimelineItemSubTitle>
    </TimelineItemTitleContainer>
    <TimelineItemDetail>
      {props.employer}
    </TimelineItemDetail>
    <TimelineItemDescription>
      <ul>
        {props.description.map(desc => (
          <li>{desc}</li>
        ))}
      </ul>
    </TimelineItemDescription>
    <TimelineTechnologies>
      {props.technologies.map(t => <TechnologyBadge key={t} technology={t} />)}
    </TimelineTechnologies>
  </TimelineItemContainer>  
)

const Timeline = ({items}) => {
  const itemsMapped = items.map((i, index) => {
    return {
      ...i,
      index,
    }
  })
  return (
    <Container>
      <TimelineWrapper>
        <TimelineContinuum />
        <TimelineItems>
          {itemsMapped.map(item => (
            <TimelineItem key={item.index} {...item}/> 
          ))}
        </TimelineItems>
      </TimelineWrapper>
    </Container>
  )
}

export default Timeline
