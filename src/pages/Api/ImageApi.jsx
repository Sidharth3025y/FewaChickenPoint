import React, { useEffect, useState } from "react";

const ImageApi = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=20")
      .then((response) => response.json())
      .then((data) => setImage(data))
      .catch((error) => console.log("Error fetching image:", error));
  }, []);
return (
  <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Random Image :
    </h1>

    {image.length === 0 ? (
      <p className="text-center text-red-500 text-lg"> Image Loading...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {image.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={image.download_url}
              alt={`By ${image.author}`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700 font-medium">By {image.author}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

};

export default ImageApi;
