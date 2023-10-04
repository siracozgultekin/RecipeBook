import React from "react";

const RecipeDetail = ({ activeRecipe }) => {
  return (
    <div>
      <img
        className="shadow-md p-3 w-full h-full max-h-[250px] "
        src={activeRecipe.img}
        alt="recipeImage"
      />
      <h1 className="font-bold text-lg text-center">{activeRecipe.title}</h1>
      <p className="text-center">{activeRecipe.description}</p>
      <h3 className=" dark:bg-slate-500 bg-orange-300 font-semibold  text-center  border-y-2">
        Ingredients
      </h3>
      <ul className="ml-2">
        {activeRecipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {" "}
            <hr />
            {ingredient} <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
