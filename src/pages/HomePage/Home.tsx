import React, { useContext } from 'react'
import { MealContext} from '../../context/mealContext'
const Home = () => {
  const {categories} = useContext(MealContext)
  return (
      <div>
        {categories.map(category => {
          return (
            <p key={category.idCategory}>{category.strCategory}</p>
          )
        })}
       </div>
  )
}

export default Home