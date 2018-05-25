import React from 'react'
import styled from 'styled-components'

import DateDisplay from './DateDisplay'

const Container = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  color: white;
`

const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  text-decoration: none;
`

const SubTitle = styled.small`
  display: block;
`

const Header = ({ siteTitle, lastUpdated }) => (
  <Container>
    <HeaderInner>
      <Title style={{ margin: 0 }}>
        {siteTitle}
      </Title>
      <SubTitle>
        <DateDisplay date={lastUpdated} />
      </SubTitle>
    </HeaderInner>
  </Container>
)

export default Header
