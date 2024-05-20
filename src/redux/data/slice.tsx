import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavouritePlaceReq, IFavouritePlaceResp } from '../../utils/interfaces';


interface IDataState {
 data: IFavouritePlaceResp | null;
 loading: boolean;
 error: string | null;
}


const initialState: IDataState = {
 data: null,
 loading: false,
 error: null,
};


const dataSlice = createSlice({
 name: 'data',
 initialState,
 reducers: {
   get: (state , action:PayloadAction<IFavouritePlaceReq>) => {
     state.loading = true;
   },
   getSuccess: (state, action: PayloadAction<IFavouritePlaceResp>) => {
     state.data = action.payload;
     state.loading = false;
     state.error = null;
   },
   getFail: (state, action: PayloadAction<string>) => {
     state.loading = false;
     state.error = action.payload;
   },
 },
});


export const { actions:dataActions, reducer:dataReducer } = dataSlice;