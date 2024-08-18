import Image from "next/image";
import React from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const LazyImage1: React.FC<LazyImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={500} height={500} loading="lazy" />
};

export default LazyImage1;
