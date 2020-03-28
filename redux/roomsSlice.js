import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

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
      const { payload } = action;
      if (payload.page === 1) {
        state.explore.rooms = payload.rooms;
        state.explore.page = 1;
      } else {
        state.explore.rooms = [...state.explore.rooms, ...payload.rooms];
      }
    },
    increasePage(state, action) {
      state.explore.page += 1;
    }
  }
});

export const { setExploreRooms, increasePage } = roomsSlice.actions;

export const getRooms = page => async dispatch => {
  try {
    const {
      data: { results }
    } = await api.rooms(page);
    dispatch(
      setExploreRooms({
        rooms: results,
        page
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default roomsSlice.reducer;
