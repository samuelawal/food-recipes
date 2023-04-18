import { CATEGORIES_MEAL } from "../constants"
import { MealStateTypes } from "../context/types"

export type Meal_Action_Type = | {type: typeof CATEGORIES_MEAL, payload: any}
export const mealReducers = (state: MealStateTypes, action: Meal_Action_Type) => {
    switch(action.type) {
        case CATEGORIES_MEAL: 
        return {
            ...state,
            categories: action.payload
        }
        default: return state
    }
}