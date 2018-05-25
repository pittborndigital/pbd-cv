import React from 'react'

const formatDate = (date) => {
  console.log(date)
  return new Date(date).toUTCString()
}

const DateDisplay = ({date}) => (
  <span>{formatDate(date)}</span>
)

export default DateDisplay
