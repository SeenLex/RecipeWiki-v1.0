import React from "react";

const About = () => {
  return (
    <div id="about-section">
      <h1 id="headline">
        About <b id="recipe-wiki-header">RecipeWiki</b>
      </h1>
      <p id="subheadline">
        Explore the art of cooking and baking with our delightful recipe blog.
      </p>
      <p>What You'll Discover:</p>
      <div className="feature-list">
        <div className="feature-item">
          <i className="feature-icon">🍽️</i>
          <span className="feature-text">Diverse Recipes</span>
        </div>
        <div className="feature-item">
          <i className="feature-icon">👩‍🍳</i>
          <span className="feature-text">Expert Tips</span>
        </div>
        <div className="feature-item">
          <i className="feature-icon">🎥</i>
          <span className="feature-text">Video Tutorials</span>
        </div>
        <div className="feature-item">
          <i className="feature-icon">🍅</i>
          <span className="feature-text">Ingredient Spotlights</span>
        </div>
        <div className="feature-item">
          <i className="feature-icon">📝</i>
          <span className="feature-text">Informative Articles</span>
        </div>
        <div className="feature-item">
          <i className="feature-icon">📷</i>
          <span className="feature-text">Gorgeous Food Photography</span>
        </div>
        <div className="feature-item">
          <i className="feature-icon">💌</i>
          <span className="feature-text">Community and Feedback</span>
        </div>
      </div>
      <p>
        RecipeWiki is your go-to resource for culinary creativity, offering a
        delightful journey through the world of flavors. Get ready to embark on
        a culinary adventure and elevate your cooking game. Happy cooking!
        🍽️👨‍🍳🍰
      </p>
    </div>
  );
};

export default About