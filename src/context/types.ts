import {Dispatch} from 'react'
import { Meal_Action_Type } from '../reducers/mealReducer'
export type Obj = {
    [key: string] : any
}
export interface MealStateTypes {
    categories: Obj[],
    loading?: Boolean,
    dispatch?: Dispatch<Meal_Action_Type>
}