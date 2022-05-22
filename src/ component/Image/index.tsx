import NextImage from 'next/image';

export type ImageProps = {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
};

export const Image: React.FC<ImageProps> = ({ src, alt = '', width, height }) => (
  <NextImage src={src} alt={alt} width={width} height={height} />
);
