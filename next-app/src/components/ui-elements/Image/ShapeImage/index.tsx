import { css } from '@emotion/react';
import Image, { ImageProps } from 'next/image';

type ImageShape = 'circle' | 'square';
type ShapeImageProps = ImageProps & { shape?: ImageShape };

const ShapeImageCss = (shape?: ImageShape) => {
  return css`
    border-radius: ${shape === 'circle' ? `50%` : `0`};
  `;
};

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props;
  return <Image css={ShapeImageCss(shape)} {...imageProps} />;
};
ShapeImage.defaultProps = {
  shape: 'circle',
};

export default ShapeImage;
