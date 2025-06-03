import React, { useState, useContext, useEffect } from 'react'
import RecipeItem from './RecipeItem'
import { RecipeContext } from '../Context/RecipeContext'
import { data } from '../constants/data';
function RecipeList() {
    const { recipe, setRecipe } = useContext(RecipeContext);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const result = data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
        setRecipe(result)
    },[query])
  return (
      <div className=''>
          <div>
              <label>Search Recipe</label>
              <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} className='border outline-none' />
          </div>
          <table>
              <tbody>
                  <tr>
                      <th>name</th>
                      <th>description</th>
                      <th>ingredients</th>
                      <th>actions</th>
                  </tr>
                  {
                      recipe.map((item) => (
                          <RecipeItem key={item.id} item={item} />
                      ))
                  }
              </tbody>
          </table>
    </div>
  )
}

export default RecipeList