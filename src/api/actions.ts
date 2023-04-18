import { Dispatch } from 'react'
import { Meal_Action_Type } from '../reducers/mealReducer'
import axios from './index'
import { CATEGORIES_MEAL, CATEGORIES_URL } from '../constants'

type Props = {
    dispatch: Dispatch<Meal_Action_Type>;
  }
export const fETCH_CATEGORIES_MEAL = async (dispatch: Props['dispatch']) => {
    try{
        const response  = await axios.get(CATEGORIES_URL)
        dispatch({type: CATEGORIES_MEAL, payload: response.data.categories})
    }catch(err) {
        console.log(err)
    }
}
