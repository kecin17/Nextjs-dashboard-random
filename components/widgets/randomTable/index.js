import { Component } from 'react'
import Table, { Th, Td } from '../../table'
import Widget from '../../widget'

export default class PageSpeedInsightsStats extends Component {
  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const { title } = this.props
    return (
      <Widget title={title}>
        <Table>
          <tbody>
            <tr>
              <Th>Request</Th>
              <Td>{Math.floor(Math.random() * 100)%6} KB</Td>
            </tr>

            <tr>
              <Th>JavaScript</Th>
              <Td>{Math.floor(Math.random() * 100)%6} KB</Td>
            </tr>

            <tr>
              <Th>CSS</Th>
              <Td>{Math.floor(Math.random() * 100)%6} KB </Td>
            </tr>

            <tr>
              <Th>HTML</Th>
              <Td>{Math.floor(Math.random() * 100)%6} KB</Td>
            </tr>

            <tr>
              <Th>Image</Th>
              <Td>{Math.floor(Math.random() * 100)%6} KB</Td>
            </tr>

            <tr>
              <Th>Other</Th>
              <Td>{Math.floor(Math.random() * 100)%6} KB</Td>
            </tr>
          </tbody>
        </Table>
      </Widget>
    )
  }
}
