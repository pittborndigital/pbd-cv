import React from 'react'
import styled, { css } from 'styled-components'

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

const TimelineItemTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`

const TimelineItemSubTitle = styled.h5`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 10px;
`

const TimelineItem = (props) => (
  <TimelineItemContainer index={props.index}>
    <TimelineIndicator />
    <TimelineItemTitle>{props.jobTitle}</TimelineItemTitle>
    <TimelineItemSubTitle>{props.employer}</TimelineItemSubTitle>
    <div><span>{props.from}</span> to <span>{props.to}</span></div>
    <p>{props.description}</p>
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
