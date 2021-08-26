import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface RoomState {
  identity: string
  isRoomHost:boolean
}

const initialState: RoomState = {
  identity: "",
  isRoomHost:false
};


export const roomSlice = createSlice({
  name: 'room',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setRoomHost: (state, action) => {

       state.identity = ""
       state.isRoomHost = action.payload;
    },
  }

});

export const { setRoomHost } = roomSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.room.value)`
export const selectCount = (state: RootState) => state.room.identity;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default roomSlice.reducer;
