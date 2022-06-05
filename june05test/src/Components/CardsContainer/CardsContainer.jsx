import React,{useState} from 'react';
import Card from '../../Utils/components/Card/Card'
import { useDebounce } from 'use-debounce';
import ClipLoader from "react-spinners/ClipLoader";
import Recipe from '../../Utils/components/Recipe/Recipe';
export const CardsContainer = () => {
const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com',
            'X-RapidAPI-Key':`81e883d18cmsh714fca83528295ep175194jsn0a9b7cc46966`
        }
};  
  const [query,setQuery]=useState("");  
  const [deferredquery]=useDebounce(query,1300)
  const [recipes,setRecipes]=useState([])
  const [loading,setLoading]=useState(false)
  const [currentRecipe,setCurrentrecipe]=useState({})
  const handelquery=(e)=>{
    setQuery(e.target.value);
  }  
  const fetcher=async()=>{
    const param=deferredquery.replace(/ /g, '%20');
    
    setLoading(true)
    const  {data}= await(await fetch(`https://recipesapi2.p.rapidapi.com/recipes/${param}`,options)).json()

    setRecipes((pre)=>[...data])
    setLoading(false)
  }
  const explore=(res)=>{
 
    setCurrentrecipe({
        ...res
    })
  }
  return (
    <>
        <div className='flex justify-center items-center p-3 relative'>
        
        <input onChange={handelquery} style={{border:"1px solid indigo"}} className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 pt-2 pb-2 sm:text-sm border-gray-300 rounded-md w-1/2 font-bold' type="search" placeholder='Search query ex-tomato Soup' value={query}/>
        <button onClick={()=>{fetcher()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
        </button>

        </div>
        <div style={{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"}} className='grid grid-cols-3 p-6 place-items-center gap-4 relative'>
        {Object.keys(currentRecipe).length===0?null:(<Recipe closePopup={()=>{setCurrentrecipe({})}} currentRecipe={currentRecipe} />)}
         {recipes.length===0?(<ClipLoader loading={loading} color='black' size={150}/>):recipes.map((rep,i)=>(<Card explore={explore} key={i} rep={rep}/>))}
        </div>
    </>
  )
}
