import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 30px;
`

const PageWrapper = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default PageWrapper
