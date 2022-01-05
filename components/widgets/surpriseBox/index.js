import { Component } from 'react'
import styled from 'styled-components'
import Widget from '../../widget'

const Content = styled.div`
  font-size: 2em;
  text-align: center;
`

export default class SurpriseBox extends Component {
  render () {
    
    if((Math.floor(Math.random()*100)%3)==0) {
        return (
            <Widget>
              <Content>Surpriseee!!!</Content>
            </Widget>
        )
    }

    return null
  }
}
