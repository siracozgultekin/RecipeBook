import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";

const CreateRecipePage = ({ setrecipeArr }) => {
  const [checker, setchecker] = useState("");
  function HandleNewRecipe(e) {
    e.preventDefault();
    if (checker === "Save") {
      setrecipeArr((prev) => [
        ...prev,
        {
          title: e.target.title.value,
          description: e.target.description.value,
          img: e.target.img.value,
          ingredients: ["debneme", "soğan", "domates", "sıvı yağ"],
        },
      ]);
    } else if (checker === "Delete") {
      e.target.title.value = "";
      e.target.img.value = "";
      e.target.description.value = "";
    } else if (checker === "Ingredient") {
      console.log("ingredient");
    }
  }
  return (
    <form onSubmit={HandleNewRecipe} className="p-3 w-full flex flex-col gap-6">
      <label className="font-bold" htmlFor="recipeTitle">
        Name
      </label>
      <Input type="text" placeholder="title" name="title" id="recipeTitle" />
      <label className="font-bold" htmlFor="recipeImg">
        Image URL
      </label>
      <Input type="text" placeholder="img" name="img" id="recipeImg" />
      <label className="font-bold" htmlFor="recirecipeDescriptionpeImg">
        Description
      </label>
      <Input
        className="h-28"
        type="text"
        placeholder="description"
        name="description"
        id="recipeDescription"
      />
      <div className="flex items-center justify-center gap-1">
        <Button
          onClick={() => setchecker("Save")}
          className="bg-blue-600 shadow-md shadow-blue-900  hover:bg-blue-900 flex-[1] "
        >
          Save
        </Button>
        <Button
          onClick={() => setchecker("Delete")}
          className="bg-red-600 shadow-md shadow-red-900  hover:bg-red-900 flex-[1] "
        >
          Delete
        </Button>
        <Button
          onClick={() => setchecker("Ingredient")}
          className="bg-green-600 shadow-md shadow-green-800 hover:bg-green-900  rounded-full text-xs w-16 h-16 "
        >
          Add Ingredient
        </Button>
      </div>
    </form>
  );
};

export default CreateRecipePage;
