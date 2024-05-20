import { combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './data/slice';


const rootReducer = combineReducers({
   data: dataReducer
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;