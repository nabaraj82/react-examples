import { createContext, useState } from "react";
import { data } from "../constants/data";
 const RecipeContext = createContext(null);


const RecipeProvider = ({ children }) => {
    const [recipe, setRecipe] = useState(data);

    return (
        <RecipeContext.Provider value={{ recipe, setRecipe }}>
            {children}
        </RecipeContext.Provider>
    )
}


export { RecipeProvider, RecipeContext}
