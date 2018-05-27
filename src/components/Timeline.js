import React from 'react'
import styled, { css } from 'styled-components'

import TechnologyBadge from './TechnologyBadge'
import DateDisplay from './DateDisplay'
import DateRangeLength from './DateRangeLength'

const Container = styled.div``

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

const TimelineItemContainer = styled.div`
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
    
    @media print {
      page-break-inside: avoid;
    }
  }
`

const TimelineItemTitle = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
  text-align: left;
`

const TimelineItemSubTitle = styled.h5`
  font-size: 0.8em;
  font-weight: normal;
  margin: 0;
  margin-bottom: 10px;
`

const TimelineItemDetail = styled.div`
  font-size: 1em;
  margin-bottom: 15px;
`

const TimelineItemDescription = styled.div`
  padding: 10px 0;
  font-size: 1.1em;
  line-height: 1.5em;
  @media (max-width: 700px) {
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  }
`

const TimelineTechnologies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  & > * {
    margin: 10px 0;
    padding: 0;
    flex-basis: 25%;
    min-height: 50px;
  }
  @media (max-width: 1000px) {
    justify-content: space-between;
    & > * {
      flex-basis: 33.33%;
    }
  }
  @media (max-width: 700px) {
    justify-content: space-between;
    & > * {
      flex-basis: 50%;
    }
  }
`

const TimelineItemTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const TimelineItem = props => (
  <TimelineItemContainer index={props.index} active={!props.to}>
    <TimelineIndicator />
    <TimelineItemTitleContainer>
      <TimelineItemTitle>{props.title}</TimelineItemTitle>
      <TimelineItemSubTitle>
        <DateDisplay
          date={props.from}
          format={props.dateFormat}
          displayFormat={props.dateDisplayFormat}
        />
        <span> to </span>
        {props.to ? (
          <DateDisplay
            date={props.to}
            format={props.dateFormat}
            displayFormat={props.dateDisplayFormat}
          />
        ) : (
          <span>Present</span>
        )}{' '}
        (<DateRangeLength
          from={props.from}
          to={props.to}
          format={props.dateFormat}
          displayFormat="y"
        />)
      </TimelineItemSubTitle>
    </TimelineItemTitleContainer>
    <TimelineItemDetail>{props.subTitle}</TimelineItemDetail>
    {props.description && (
      <TimelineItemDescription>
        <ul>{props.description.map(desc => <li>{desc}</li>)}</ul>
      </TimelineItemDescription>
    )}
    <TimelineTechnologies>
      {props.technologies.map(t => <TechnologyBadge key={t} technology={t} />)}
    </TimelineTechnologies>
  </TimelineItemContainer>
)

const Timeline = ({ items }) => {
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
          {itemsMapped.map(item => <TimelineItem key={item.index} {...item} />)}
        </TimelineItems>
      </TimelineWrapper>
    </Container>
  )
}

export default Timeline
