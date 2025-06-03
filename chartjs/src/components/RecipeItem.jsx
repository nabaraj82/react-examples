import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Edit from './Edit';
import { RecipeContext } from '../Context/RecipeContext';
function RecipeItem({ item: recipe }) {
  const { recipe: data, setRecipe } = useContext(RecipeContext);
  const [edit, setEdit] = useState(false);
    const navigate = useNavigate();
    const handleView =(item) => {
        navigate('/details', {state: {'item': item}})
  }
  const deleteRecipe = (id) => {
    const updateRecipes = data.filter((item) => item.id !== id);

    setRecipe(updateRecipes)
  }
  return (
    <>
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.description}</td>
        <td>{recipe.ingredients}</td>
        <td style={{ display: "flex", alignItems: "center" }}>
          <button onClick={() => handleView(recipe)}>View</button> |{" "}
          <button
            className="bg-blue-100 text-sky-600 px-4 py-2 m-3 rounded-md"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>{" "}
          | <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </td>
        <td>{edit && <Edit setEdit={setEdit} editRecipe={recipe} />}</td>
      </tr>
    </>
  );
}

export default RecipeItem