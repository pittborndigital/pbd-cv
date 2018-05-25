import React from 'react'

const formatDate = date => new Date(date).toUTCString()
const DateDisplay = ({ date }) => <span>{formatDate(date)}</span>

export default DateDisplay
