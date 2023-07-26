import React from "react";
import Image from "next/image";
import stack from "../../public/images/Stack.svg";
import stackIndigo from "../../public/images/StackIndigo.svg";

interface CardProps {
  data: string[];
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center bg-gray-800 py-4 px-8 w-1/4 rounded-lg divide-y">
      {data.map((item, index) => (
        <React.Fragment key={item}>
          <div className="flex items-center gap-4 text-white text-left py-4">
            {index % 2 === 0 ? (
              <Image src={stack} alt="database" />
            ) : (
              <Image src={stackIndigo} alt="database indigo" />
            )}
            {item}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Card;
