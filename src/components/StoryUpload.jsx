// StoryUpload.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const StoryUpload = ({ setStories }) => {
  const [file, setFile] = useState(null);
  const [filter, setFilter] = useState("");
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
      filter,
      createdAt: Date.now(),
    };
    setStories((prev) => [...prev, newStory]);
    navigate("/");
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center gap-5  shadow-lg bg-white w-fit mx-auto ">
      <input
        className="p-4 border border-dashed border-gray-600"
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
      />
      {file && (
        <div className={`my-4 ${filter}`}>
          <img
            src={file}
            alt="Preview"
            className="w-full max-w-md rounded-lg"
          />
        </div>
      )}
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="my-2 p-2 border rounded-md"
      >
        <option value="">No Filter</option>
        <option value="grayscale">Grayscale</option>
        <option value="sepia">Sepia</option>
        <option value="brightness-125">Brightness</option>
      </select>
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
