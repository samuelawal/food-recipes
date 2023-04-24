import React, { useContext } from 'react'
import { MealContext} from '../../context/mealContext'
import NavBar from '../../components/NavBar/NavBar'
import ContainerBanner from '../../components/ContainerBanner/ContainerBanner'
import CategoryMeal from '../../components/CategoryMeal/CategoryMeal'
const Home = () => {
  const {categories} = useContext(MealContext)
  return (
    <React.Fragment>
        <NavBar/>
        <ContainerBanner/>
        <CategoryMeal  {...{categories}}/>
       </React.Fragment>
  )
}

export default Home