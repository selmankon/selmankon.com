import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => {
  return <NextImage src={src} {...rest} />
}

export default Image
