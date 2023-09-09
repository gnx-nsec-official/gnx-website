"use client";

import React from "react";
import ImageUploading from "react-images-uploading";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="">
            <div className="flex flex-col">
              <div className="bg-blue-100 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onImageRemoveAll}
                  className="bg-blue-300 p-2 m-2 rounded"
                >
                  Remove all images
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onImageRemoveAll}
                  className="bg-green-300 p-2 m-2 rounded"
                >
                  Save Data
                </motion.button>
              </div>
              <div className="flex justify-center items-center m-2 h-[80vh]">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 flex flex-row gap-3 bg-blue-100 rounded-lg w-fit h-fit"
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <Upload />
                  Click or Drop here
                </motion.button>
              </div>
            </div>

            {imageList.map((image, index) => (
              <div key={index}>
                <img src={image["data_url"]} alt="" width="100" />
                <div>
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
