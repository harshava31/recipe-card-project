"use client";

import React from "react";
import Image from "next/image";

const RecipeCard = ({ title, description, imageUrl, ingredients, steps }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <Image src={imageUrl} alt={title} width={500} height={300} className="image" />
      </div>
      <div className="recipe-content">
        <h2>{title}</h2>
        <p className="description">{description}</p>
      </div>

      <style jsx>{`
        .recipe-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
          max-width: 100%;
          margin: 10px;
          font-family: 'Arial', sans-serif;
        }

        .recipe-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .recipe-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .image {
          object-fit: cover;
          border-bottom: 5px solid #f8c202;
        }

        .recipe-content {
          padding: 15px;
        }

        h2 {
          font-size: 1.4rem;
          margin: 10px 0;
          color: #333;
        }

        .description {
          font-size: 0.95rem;
          color: #777;
        }

        @media (max-width: 600px) {
          .recipe-card {
            margin: 5px;
          }

          .recipe-image {
            height: 150px;
          }

          h2 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;
