import { useEffect, useState } from 'react'
import './App.css'
import RecipesComponent from './RecipesComponent';

function App() {

  const MY_ID = import.meta.env.VITE_MY_ID;
  const MY_KEY = import.meta.env.VITE_MY_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");


  useEffect (() => {
    const getRecipes = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
      console.log(data.hits);
    }
    getRecipes()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(search);
    setSearch("");
  }

  return (
    <div className='App'>

      <div className='Container'>
        <h1>Find your best recipe</h1>
      </div>

      <div className='Container search-area'>
        <form onSubmit={finalSearch} className="search-form">
          <input type='text' placeholder='Search by ingredients...' className='search' 
          onChange={myRecipeSearch} value={search}/>

          <button className="search-btn">
            <img src='https://img.icons8.com/fluency/48/000000/fry.png' alt='icon'/>
          </button>

        </form>
      
      </div>


      {myRecipes.map((element, index) => (
        <RecipesComponent key={index}
        label = {element.recipe.label}
        image = {element.recipe.image}
        ingredients = {element.recipe.ingredientLines}
        cooked = {element.recipe.url}
        calories = {element.recipe.calories}
        fat = {element.recipe.totalNutrients.FAT?.quantity}
        protein = {element.recipe.totalNutrients.PROCNT?.quantity}
        carbs = {element.recipe.totalNutrients.CHOCDF?.quantity}
        servingSize = {element.recipe.yield}
        />
      ))}

    </div>
  )
}

export default App
