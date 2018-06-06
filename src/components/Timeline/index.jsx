import React from 'react'

import {
  TimelineContainer,
  TimelineWrapper,
  TimelineContinuum,
  TimelineItems,
  TimelineItemContainer,
  TimelineIndicator,
  TimelineTitleContainer,
  TimelineItemTitleWrapper,
  TimelineItemTitle,
  TimelineItemSubTitle,
  TimelineItemTitleDetail,
  TimelineItemDescription,
  TimelineTechnologies,
} from './styled'
import TechnologyBadge from '../TechnologyBadge'
import DateDisplay from '../DateDisplay'
import DateRangeLength from '../DateRangeLength'

const TimelineItem = props => (
  <TimelineItemContainer index={props.index} active={!props.to}>
    <TimelineIndicator />
    <TimelineTitleContainer>
      <TimelineItemTitleWrapper>
        <TimelineItemTitle>{props.title}</TimelineItemTitle>
        <TimelineItemSubTitle>{props.subTitle}</TimelineItemSubTitle>
      </TimelineItemTitleWrapper>
      <TimelineItemTitleDetail>
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
      </TimelineItemTitleDetail>
    </TimelineTitleContainer>
    {typeof props.description === 'string' && (
      <TimelineItemDescription
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    )}
    {typeof props.description === 'object' && (
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
  const itemsMapped = items.map((i, index) => ({
    ...i,
    index,
  }))
  return (
    <TimelineContainer>
      <TimelineWrapper>
        <TimelineContinuum />
        <TimelineItems>
          {itemsMapped.map(item => <TimelineItem key={item.index} {...item} />)}
        </TimelineItems>
      </TimelineWrapper>
    </TimelineContainer>
  )
}

export default Timeline
