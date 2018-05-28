import React from 'react'

const PageDividerIcon = ({ fill = 'grey', height = 16 }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 16"
    width={height * 4.25}
    height={height}
  >
    <circle fill={fill} r="3" cx="6" cy="8" />
    <circle fill={fill} r="3" cx="20" cy="8" />
    <circle fill={fill} r="3" cx="34" cy="8" />
  </svg>
)

export default PageDividerIcon
