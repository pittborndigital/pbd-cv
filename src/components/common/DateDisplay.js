import React from 'react'
import fecha from 'fecha'

const formatDate = ({ date, format, displayFormat }) => {
    const dObj = fecha.parse(date, format)
    return fecha.format(dObj, displayFormat)
}

const DateDisplay = ({ date, format, displayFormat }) => (
    <span>{formatDate({ date, format, displayFormat })}</span>
)

DateDisplay.defaultProps = {
    format: "YYYY-MM-DD",
    displayFormat: "DD MMM YYYY",
}

export default DateDisplay
