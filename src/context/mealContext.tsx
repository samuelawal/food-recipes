import { useReducer, createContext, useEffect, Dispatch} from 'react';
import { fETCH_CATEGORIES_MEAL } from '../api/actions';
import { MealStateTypes } from './types';
import { Meal_Action_Type, mealReducers } from '../reducers/mealReducer';

interface ContextProps extends MealStateTypes {
    fETCH_CATEGORIES_MEAL: (dispatch: Dispatch<Meal_Action_Type>) => void
}

export interface ContextType {
    state: MealStateTypes;
    dispatch: Dispatch<Meal_Action_Type>;
    fETCH_CATEGORIES_MEAL: () => void;
}
export const MealContext = createContext<ContextProps>({} as ContextProps);
const initialState : MealStateTypes = {
    categories: [],
    loading: false
}

export const MealProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(mealReducers, initialState)

    useEffect(() => {
        fETCH_CATEGORIES_MEAL(dispatch)
    }, [])
    return (
        <MealContext.Provider value={{...state, dispatch, fETCH_CATEGORIES_MEAL}}>
            {children}
        </MealContext.Provider>
    )
    
}


