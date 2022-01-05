import { Component } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Widget from '../../widget'
  
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const getImage = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const filename = '/static/'+(randomNumber%5)+'.jpg'
  return filename;
}

export default class RandomImage extends Component {
  // static defaultProps = {
  //   interval: 1000 * 10
  // }

  componentDidMount () {
  }

  render () {
    const { title } = this.props
    const imgUrl = getImage();
    return (
      <Widget title={title}>
        <Image
          src={imgUrl}
          alt="Random Picture"
          width={200}
          height={200}
        />
      </Widget>
    )
  }
}
