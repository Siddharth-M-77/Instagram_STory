import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const StoryView = ({ stories, setStories }) => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundStory = stories.find((s) => s.id === storyId);
    if (foundStory) {
      setStory(foundStory);
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      navigate("/");
    }
  }, []);


  return (
    story && (
      <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white rounded-lg p-4">
          <img src={story.file} alt="Story" className="w-full h-auto rounded" />
          <p className="text-gray-700 text-center mt-4">{story.caption}</p>
          <div className="flex justify-between items-center mt-4"></div>
        </div>
      </div>
    )
  );
};

export default StoryView;
