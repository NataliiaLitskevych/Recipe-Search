import React from 'react';

function RecipesComponent ({label, image, ingredients, cooked, calories, fat, protein, carbs, servingSize}) {

    return (
        <div className="Container">
            <div className="Dish-container">
                
                <h1>{label}</h1>
                
                <div className="Content-wrapper">
                    
                    <img src={image} alt={label}/>
                    
                    <div className="text-content">

                        {servingSize > 0 && (
                            <p className="serving-size">
                                🍽️ Serving-size: <strong>{servingSize}</strong>
                            </p>
                        )}
                        
                        <h3>Ingredients:</h3>
                        <ul className="list ingredient-list">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient}
                                </li>
                            ))}
                        </ul>

                        <div className="nutrients-info">
                            <h3>Nutritional info:</h3>
                            <p>Proteins: <strong>{protein ? protein.toFixed(1) : 'N/A'} g</strong></p>
                            <p>Fats: <strong>{fat ? fat.toFixed(1) : 'N/A'} g</strong></p>
                            <p>Carbohydrates: <strong>{carbs ? carbs.toFixed(1) : 'N/A'} g</strong></p>
                        </div>

                        <div className="recipe-details">
                            <a href={cooked} target="_blank" rel="noopener noreferrer">
                                Cooking instructions
                            </a>
                            <p className="calories-info">
                                Total Calories: {calories.toFixed()} calories
                            </p>
                        </div>
                    
                    </div> 

                </div> 

            </div> 

        </div>
    )
}

export default RecipesComponent;