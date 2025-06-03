import React, { useState, useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext";

function Edit({ setEdit, editRecipe }) {
    const { recipe, setRecipe } = useContext(RecipeContext);
    const [data, setData] = useState({
        id: editRecipe.id,
    name: editRecipe.name,
    description: editRecipe.description,
    ingredients: editRecipe.ingredients,
    preparation_steps: editRecipe.preparation_steps,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSave = () => {
      const updatedRecipes = recipe.map((item) => item.id === editRecipe.id ? data: item);
      setRecipe(updatedRecipes);
      setEdit(false);
  };
  return (
    <div className="fixed top-40 left-[40%] bg-white rounded-md border p-4 shadow-orange-600 shadow-lg">
      <h1 className="text-2xl font-semibold text-center">Edit Recipe</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="bg-slate-200 w-full  p-2 rounded-md outline-none"
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          type="text"
          value={data.description}
          onChange={handleChange}
          className="bg-slate-200 w-full  p-2 rounded-md outline-none"
        />
      </div>
      <div>
        <label>Ingredients:</label>
        <textarea
          name="ingredients"
          value={data.ingredients}
          onChange={handleChange}
          className="bg-slate-200 w-full  p-2 rounded-md outline-none"
        />
      </div>
      <div>
        <label>Steps:</label>
        <textarea
          name="preparation_steps"
          value={data.preparation_steps}
          onChange={handleChange}
          className="bg-slate-200 w-full  p-2 rounded-md outline-none"
        />
      </div>

      <div className="flex justify-between p-4">
        <button
          className="bg-white px-2 py-1 border rounded-md shadow-md hover:bg-slate-50 text-red-400 cursor-pointer"
          onClick={() => setEdit(false)}
        >
          cancel
        </button>
              <button
                  onClick={handleSave}
          className="bg-white px-2 py-1 border rounded-md shadow-md hover:bg-slate-50 cursor-pointer"
        >
          save
        </button>
      </div>
    </div>
  );
}

export default Edit;
