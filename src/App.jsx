import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstaStory from "./components/InstaStory";
import StoryUpload from "./components/StoryUpload";
import StoryView from "./components/StoryView";

const App = () => {
  const [stories, setStories] = useState([]);

  return (
    <div className="bg-gray-700 w-screen h-screen">
      <Router>
      <Routes>
        <Route path="/" element={<InstaStory stories={stories} />} />
        <Route
          path="/upload"
          element={<StoryUpload setStories={setStories} />}
        />
        <Route
          path="/view/:storyId"
          element={<StoryView stories={stories} setStories={setStories} />}
        />
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;
