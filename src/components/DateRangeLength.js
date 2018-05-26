import React from 'react'
import fecha from 'fecha'
import ms from '../module/ms'

const DateRangeLength = ({ from, to, format }) => {
    const dFrom = fecha.parse(from, format)
    const dTo = to ? fecha.parse(to, format) : new Date()
    return (
        <span>
            {ms(dTo - dFrom, {
                long: true,
            })}
        </span>
    )
}

export default DateRangeLength
