import React from 'react'
import { Obj } from '../../context/types'
import styles from './CategoryMeal.module.css'
type CategoryMealProp = {
    categories: Obj[]
}
const CategoryMeal = ({ categories }:CategoryMealProp) => {
  return (
    <section className='container'>
        <h2>Meal Category</h2>
        <div className={styles.category}>
        {categories.map((category) => {
            return (
        <article className={styles.food_card} key={category.idCategory}>
            <img src={category.strCategoryThumb} width="100%" alt='foods'/>
            <p className={styles.food_title}>{category.strCategory}</p>
        </article>
            )
        })}
        </div>
    </section>
  )
}

export default CategoryMeal