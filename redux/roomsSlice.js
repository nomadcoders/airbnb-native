import { createSlice } from "@reduxjs/toolkit";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    explore: {
      page: 1,
      rooms: []
    },
    favs: []
  },
  reducers: {
    setExploreRooms(state, action) {
      state.explore.rooms.push(action.payload.rooms);
      state.explore.page = action.payload.page;
    }
  }
});

const { setExploreRooms } = roomsSlice.actions;

export default roomsSlice.reducer;
