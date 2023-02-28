import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    //generates action creators and action types that correspond to the reducers and state
    name: 'favorite',
    initialState: {
        ids: [] as string[],
    },
    reducers: {//reducers are like event listeners. 
        //It takes currState, and an action, and returns a new state
        addFavorite: (state, action) => {//action{type:'',payload:any} //state:redux gives the latest state
            state.ids.push(action.payload.id);
            //with redux toolkit we can mutate the object and toolkit take care of it. 
            //with just redux and without toolkit it's immutable, and updates the copy of the state
            //payload is any extra data that we attach to this function and pass
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
            //splice is a method to remove an element from an array
        }
    }
});


export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;