import React from 'react';

function ImageGrid() {
  const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  ];

  return (
    <>
   <div className="flex flex-col items-center p-10 m-10">
      <h1 className="text-4xl mb-6">Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10">
        {images.map((image, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
     
    </> 
  );
}

export default ImageGrid;
