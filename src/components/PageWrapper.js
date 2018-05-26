import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 60px;
  @media (max-width: 700px) {
    padding: 20px;
  }
`

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>

export default PageWrapper
