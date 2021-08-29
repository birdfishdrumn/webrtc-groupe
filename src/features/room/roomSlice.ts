import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface RoomState {
  identity: string
  isRoomHost: boolean
  connectionOnlyWithAudio: boolean
  roomId: string | null
  showOverlay: boolean
  participants:any[]
}

const initialState: RoomState = {
  identity: "",
  isRoomHost: false,
  connectionOnlyWithAudio: false,
  roomId: null,
  showOverlay: true,
  participants:[]
};


export const roomSlice = createSlice({
  name: 'room',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setRoomHost: (state, action) => {
       state.isRoomHost = action.payload;
    },
    setConnectOnlyWithAudio: (state, action) => {
            state.connectionOnlyWithAudio = action.payload;
    },
      setRoomId: (state, action) => {
            state.roomId = action.payload;
    },
       setIdentity: (state, action) => {
            state.identity = action.payload;
    },
         setOverlay: (state, action) => {
            state.showOverlay = action.payload;
    },
          setParticipants: (state, action) => {
            state.participants = action.payload
    },
  }

});

export const { setRoomHost,setConnectOnlyWithAudio,setRoomId,setIdentity,setOverlay,setParticipants } = roomSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.room.value)`
export const getRoomState = (state: RootState) => state.room.isRoomHost;
export const getConnectOnlyWithAudio = (state: RootState) => state.room.connectionOnlyWithAudio;
export const getRoomId = (state: RootState) => state.room.roomId;
export const getIdentity = (state: RootState) => state.room.identity;
export const getOverlay = (state: RootState) => state.room.showOverlay;
export const getParticipants = (state: RootState) => state.room.participants;
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default roomSlice.reducer;
