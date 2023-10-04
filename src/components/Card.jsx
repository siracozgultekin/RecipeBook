import React from "react";

const Card = ({ recipe, setActiveRecipe }) => {
  const handleClick = () => {
    setActiveRecipe(recipe);
  };
  return (
    <div
      className=" p-2 rounded-lg bg-gray-200 mb-2 flex justify-between"
      onClick={handleClick}
    >
      <div>
        <p className="text-black font-semibold">{recipe.title}</p>
        <p className="text-black">{recipe.description}</p>
      </div>
      <img className="w-[60px] h-[60px]" src={recipe.img} />
    </div>
  );
};

export default Card;
