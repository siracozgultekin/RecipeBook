import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Button } from "../components/ui/button";
import RecipeDetail from "../components/RecipeDetail";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link, Route, Routes } from "react-router-dom";
import CreateRecipePage from "./CreateRecipePage";

const HomePage = () => {
  const [recipeArr, setrecipeArr] = useState([
    {
      title: "barbunya",
      description: "Tatsız bir yemek",
      img: "https://i.ytimg.com/vi/C3rawMys1mA/maxresdefault.jpg",
      ingredients: ["barbunya", "soğan", "domates", "sıvı yağ"],
    },
    {
      title: "pizza",
      description: "Tam bir lütuf",
      img: "https://www.kevserinmutfagi.com/wp-content/uploads/2016/01/karisik_pizza1.jpg",
      ingredients: ["un", "domates", "peynir", "sıvı yağ"],
    },
    {
      title: "Kajun Tavuk",
      description: "Zararlı ama GÜZEL yemek",
      img: "https://efsaneyemektarifleri.com/wp-content/uploads/2020/04/spicy-fried-chicken-strips-3056880-hero-01-e5bad43e0d3441749f17c1b98b5486c2.jpg",
      ingredients: ["tavuk", "baharat", "sıvı yağ"],
    },
    {
      title: "Kuru Fasulye",
      description: "sulu yemek",
      img: "https://i.nefisyemektarifleri.com/2022/05/24/etli-kuru-fasulye-tarifi-8.jpg",
      ingredients: ["fasulye", "soğan", "domates", "sıvı yağ"],
    },
    {
      title: "Künefe",
      description: "Dünyanın en iyi tatlısı",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGVbCw-V1hfwuR7M5FiQyoPJWSgV2_rOeiA&usqp=CAU",
      ingredients: ["un", "peynir", "şerbet", "tuz"],
    },
  ]);
  const [activeRecipe, setActiveRecipe] = useState(null);

  return (
    <main className="bg-blue-100 dark:bg-inherit h-full">
      <Header />

      <div className=" m-3 pt-7 flex justify-evenly ">
        <div className="dark:bg-slate-700 bg-orange-400 flex flex-col gap-2 max-h-[500px] items-center w-[40%] rounded-lg p-2">
          <Link className="pl-3 w-full" to="/create">
            <Button className="w-[40%]  bg-green-600 hover:bg-green-900 ">
              New Recipe
            </Button>
          </Link>
          <Separator className="my-2" />
          <ScrollArea className="p-3 rounded-md  w-full flex flex-col gap-2">
            {recipeArr.map((recipe) => (
              <Link key={recipe.title} to="/">
                <Card recipe={recipe} setActiveRecipe={setActiveRecipe} />
              </Link>
            ))}
          </ScrollArea>
        </div>
        <div className="dark:bg-slate-400 bg-orange-200 flex flex-col w-[40%] rounded-lg">
          <Routes>
            <Route
              exact
              path="/"
              element={
                activeRecipe && <RecipeDetail activeRecipe={activeRecipe} />
              }
            />
            <Route
              path="/create"
              element={<CreateRecipePage setrecipeArr={setrecipeArr} />}
            />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
