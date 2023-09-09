import React from "react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

interface ImageInterface {
  publicId: string,
  height: number,
  width: number
}

const Image = (props: ImageInterface) => {
  const cloudName: string = process.env.NEXT_PUBLIC_CLOUD_NAME ?? "dk6crgnze";

  const myImage = new CloudinaryImage(props.publicId, {
    cloudName: cloudName,
  }).resize(fill().width(props.width).height(props.width));

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export default Image;
