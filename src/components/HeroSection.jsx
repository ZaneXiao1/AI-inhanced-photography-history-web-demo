import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      {/* 左侧文字 */}
      <div className="hero-text">
        <blockquote>
          "It is an illusion that photos are made with the camera… they are made
          with the eye, heart and head...”
        </blockquote>
        <p className="author">— HENRI CARTIER-BRESSON</p>
      </div>

      {/* 右侧图片 */}
      <div className="hero-image">
        <img
          src="https://www.dreamideamachine.com/web/wp-content/uploads/2022/08/br1.jpg"
          alt="Example"
        />
      </div>
    </section>
  );
}

export default HeroSection;
