import React from 'react'
import styled, { css } from 'styled-components'

const TimelineContainer = styled.div``

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

  @media only screen and (max-width: 700px) {
    height: 20px;
    width: 20px;
    left: -10px;
  }
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
    
    @media only print {
      page-break-inside: avoid;
      margin-bottom: 75px;
    }
  }
  @media only screen and (max-width: 700px) {
    padding-left: 20px;
  }
`

const TimelineTitleContainer = styled.div`
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

const TimelineItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
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
  margin: 0;
  margin-bottom: 10px;
`

const TimelineItem = props => (
  <TimelineItemContainer index={props.index} active={!props.to}>
    <TimelineIndicator />
    <TimelineTitleContainer>
      <TimelineItemTitleWrapper>
        <TimelineItemTitle>{props.title}</TimelineItemTitle>
        {!props.subTitle && (<TimelineItemSubTitle>{props.subTitle}</TimelineItemSubTitle>)}
      </TimelineItemTitleWrapper>
    </TimelineTitleContainer>
    {props.renderItem()}
  </TimelineItemContainer>
)

const Timeline = ({ items, renderItem }) => {
  const itemsMapped = items.map((i, index) => ({
    ...i,
    index,
  }))
  return (
    <TimelineContainer>
      <TimelineWrapper>
        <TimelineContinuum />
        <TimelineItems>
          {itemsMapped.map((item, index) => {
            const renderTimelineItem = () => renderItem({ item, index });
            return <TimelineItem key={item.index} {...item} renderItem={renderTimelineItem} />
          })}
        </TimelineItems>
      </TimelineWrapper>
    </TimelineContainer>
  );
}

export default Timeline
