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
      const { explore } = state;
      const { payload } = action;
      payload.rooms.forEach(payloadRoom => {
        const exists = explore.rooms.find(
          savedRoom => savedRoom.id === payloadRoom.id
        );
        if (!exists) {
          explore.rooms.push(payloadRoom);
        }
      });
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
        rooms: results
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default roomsSlice.reducer;
