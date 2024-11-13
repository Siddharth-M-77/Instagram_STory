import React from "react";
import { Link } from "react-router-dom";
import StoryItem from "../components/StoryItem";

const InstaStory = ({ stories }) => (
  <div className="w-full h-full p-4">
    <div className="w-full flex overflow-x-auto space-x-4 scrollbar-hide">
      {stories.map((story) => (
        <StoryItem key={story.id} story={story} />
      ))}
    </div>
    <div className="text-center mt-6">
      <Link to="/upload">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Upload Story
        </button>
      </Link>
    </div>
  </div>
);

export default InstaStory;
