import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 60px;
  @media (max-width: 700px) {
    padding: 20px;
  }
  @page {
    size: A4 portrait;
    margin: 20mm 10mm 20mm 10mm;
  }
  @media only print {
    padding: 0;
  }
`

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>

export default PageWrapper
