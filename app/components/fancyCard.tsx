import React, { FC } from "react";
import CustomButton from "./customButton";

interface CardProps {
  title: string;
  description: string;
  showButton?: boolean; // Optional prop to determine if the button should be shown
}

const FancyCard: FC<CardProps> = ({ title, description, showButton = false }) => {
  const imageUrl = "/images/FancyCardBg.png";

  const cardHeight = showButton ? "h-auto" : "h-auto"; // Set the height based on the showButton prop

  return (
    <div className={`inline-flex overflow-hidden shadow-lg ${cardHeight}`}>
      <div
        className="bg-cover rounded-lg flex flex-col bg-center px-4 py-8 max-w-md"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="flex-1">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-400">
            {title}
          </h2>
          <p className="text-white text-left leading-6 font-normal my-4 mr-4">
            {description}
          </p>
        </div>
        {showButton && <CustomButton />}
      </div>
    </div>
  );
};

export default FancyCard;
