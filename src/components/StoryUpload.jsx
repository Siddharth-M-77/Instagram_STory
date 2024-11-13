import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const StoryUpload = ({ setStories }) => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = () => {
    const newStory = {
      id: nanoid(),
      file,
    };
    setStories((prev) => [...prev, newStory]);
    navigate("/");
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="my-2"
      />
      {file && (
        <div className="my-4">
          <img
            src={file}
            alt="Preview"
            className="w-full max-w-md rounded-lg"
          />
        </div>
      )}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleUpload}
      >
        Upload Story
      </button>
    </div>
  );
};

export default StoryUpload;
