import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const StoryView = ({ stories, setStories }) => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundStory = stories.find((s) => s.id === storyId);
    if (foundStory) {
      const currentTime = Date.now();
      const timeDiff = currentTime - foundStory.createdAt;
      if (timeDiff > 86400000) {
        setStories((prev) => prev.filter((story) => story.id !== storyId));
        navigate("/");
      } else {
        setStory(foundStory);
        const timer = setTimeout(() => {
          navigate("/");
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      navigate("/");
    }
  }, []);

  const handleDelete = () => {
    setStories((prev) => prev.filter((s) => s.id !== storyId));
    navigate("/");
  };

  return (
    story && (
      <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-lg p-4">
          <img
            src={story.file}
            alt="Story"
            className={`w-full h-auto rounded ${story.filter}`}
          />
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={handleDelete}
              className="text-white rounded-lg px-6 py-2 bg-red-500 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default StoryView;
