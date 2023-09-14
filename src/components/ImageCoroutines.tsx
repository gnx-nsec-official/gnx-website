import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

interface ImageCoroutineProps {
  src: string | StaticImageData;
  alt: string;
  heading: string;
  body: string;
}

const ImageCoroutine = ({ src, alt, heading, body }: ImageCoroutineProps) => {
  return (
    <div className="flex items-center mx-4">
      <div className="flex-shrink-0 w-64 h-48">
        <Image src={src} alt={alt} width={400} height={300} />
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p className="text-gray-700">{body}</p>
      </div>
    </div>
  );
};

export default ImageCoroutine;
