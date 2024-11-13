import React from "react";
import { Link } from "react-router-dom";

const StoryItem = ({ story }) => (
  <Link to={`/view/${story.id}`} className="w-24 h-24 flex-shrink-0">
    <img
      src={story.file}
      alt="Story"
      className="w-full h-full rounded-full object-cover border border-gray-300"
    />
  </Link>
);

export default StoryItem;
