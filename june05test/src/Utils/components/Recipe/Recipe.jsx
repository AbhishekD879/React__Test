import React from 'react'
import "./rCss.css"
const Recipe = ({currentRecipe,closePopup}) => {
   
  return (
    <div className='recipiConttainer bg-gray-800 rounded shadow overflow-scroll'>
    <div onClick={closePopup} className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
  <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
  </svg>
</div>

    <div className='imageContainer'>
    <img src={currentRecipe.image} alt={currentRecipe.name}/>
    </div>
    <div className='recipeInformation'>
    <h1>{currentRecipe.name}</h1>
    <h2>Ingredients</h2>
    <div className='ingredients'>
        {currentRecipe.ingredients.map((ing,index)=>(<p key={index}>{index}:{ing}</p>))}
    </div>
    <h2>Instructions</h2>
    <div className='ingredients'>
        {currentRecipe.instructions.map((ins,index)=>(<p key={index}>Steps{index}:{ins}</p>))}
    </div>
    </div>
    </div>
  
  )
}

export default Recipe