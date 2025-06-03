import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

function RecipeDetails() {
    let location = useLocation();
    const [details, setDetails] = useState({});
    useEffect(() => {
        setDetails(location.state.item);
    }, [location]);
    console.log(details);
  return (
      <div>
          <div>
              <label>Name: </label>
              <p>{details.name}</p>        
         </div>
    </div>
  )
}

export default RecipeDetails