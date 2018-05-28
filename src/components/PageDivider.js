import React from 'react'
import styled, { css } from 'styled-components'

import PageDividerIcon from './icon/PageDivider'

const PageDividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  background: white;
`

const PageDividerLine = styled.div`
  height: 2px;
  flex-basis: calc(50% - 50px);
  ${props => css`
    background-color: ${props.color};
  `};
`

const PageDivider = ({ color }) => (
  <PageDividerContainer>
    <PageDividerLine color={color} />
    <PageDividerIcon fill={color} />
    <PageDividerLine color={color} />
  </PageDividerContainer>
)

PageDivider.defaultProps = {
  color: '#e1dfdf',
}

export default PageDivider
