import React from 'react'
import styled from 'styled-components'

import ReactIcon from './icon/React'
import ReduxIcon from './icon/Redux'
import StylusIcon from './icon/Stylus'
import JavaScriptIcon from './icon/JavaScript'
import NodeIcon from './icon/Node'
import HtmlIcon from './icon/Html'
import CssIcon from './icon/Css'
import FirebaseIcon from './icon/Firebase'
import AngularIcon from './icon/Angular'
import KnockoutIcon from './icon/Knockout'
import GatsbyIcon from './icon/Gatsby'
import JestIcon from './icon/Jest'
import JQueryIcon from './icon/JQuery'
import MongoIcon from './icon/Mongo'
import JenkinsIcon from './icon/Jenkins'
import CordovaIcon from './icon/Cordova'
import D3Icon from './icon/D3'
import DatabaseIcon from './icon/Database'
import PlugIcon from './icon/Plug'
import BracketsIcon from './icon/Brackets'

import STYLED_COMPONENTS_ICON from './icon/StyledComponents.png'
import UNSTATED_ICON from './icon/Unstated.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TechLabel = styled.label`
  text-transform: uppercase;
  font-size: 11px;
  text-align: center;
`

const TechLabelImg = styled.img`
  margin-bottom: 0;
`

const iconForTechnology = technology => {
  const defaultProps = {
    height: 32,
    width: 32,
  }

  switch (technology) {
    case 'react':
    case 'react-native':
      return <ReactIcon {...defaultProps} />
    case 'redux':
      return <ReduxIcon {...defaultProps} />
    case 'stylus':
      return <StylusIcon {...defaultProps} />
    case 'html':
      return <HtmlIcon {...defaultProps} />
    case 'javascript':
      return <JavaScriptIcon {...defaultProps} />
    case 'node':
      return <NodeIcon {...defaultProps} />
    case 'css':
      return <CssIcon {...defaultProps} />
    case 'firebase':
      return <FirebaseIcon {...defaultProps} />
    case 'angular':
      return <AngularIcon {...defaultProps} />
    case 'knockout':
      return <KnockoutIcon {...defaultProps} width={64} />
    case 'styled-components':
      return (
        <TechLabelImg
          src={STYLED_COMPONENTS_ICON}
          {...defaultProps}
          width={64}
        />
      )
    case 'unstated':
      return <TechLabelImg src={UNSTATED_ICON} {...defaultProps} width={64} />
    case 'gatsby':
      return <GatsbyIcon {...defaultProps} />
    case 'jest':
      return <JestIcon {...defaultProps} />
    case 'jquery':
    case 'jquery-mobile':
      return <JQueryIcon {...defaultProps} />
    case 'mongo':
      return <MongoIcon {...defaultProps} />
    case 'jenkins':
      return <JenkinsIcon {...defaultProps} />
    case 'cordova':
      return <CordovaIcon {...defaultProps} />
    case 'd3':
      return <D3Icon {...defaultProps} />
    case 'sql':
      return <DatabaseIcon {...defaultProps} />
    case 'websockets':
      return <PlugIcon {...defaultProps} />
    case 'regexp':
      return <BracketsIcon {...defaultProps} />
    default:
      return null
  }
}

const TechnologyBadge = ({ technology }) => (
  <Container>
    {iconForTechnology(technology)}
    <TechLabel>{technology}</TechLabel>
  </Container>
)

export default TechnologyBadge
