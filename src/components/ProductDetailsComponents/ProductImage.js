import React from 'react'
import { ImageViewWrapper, StyledImage } from './styled'
export default function ProductImage({ imgUrl='https://placehold.co/600x400/png' }) {
  return (
    <ImageViewWrapper>
      <StyledImage source={{ uri: imgUrl }} />
    </ImageViewWrapper>
  )
}
