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
      state.explore.page = payload.page;
    }
  }
});

const { setExploreRooms } = roomsSlice.actions;

export const getRooms = () => async dispatch => {
  try {
    const {
      data: { results }
    } = await api.rooms();
    dispatch(
      setExploreRooms({
        rooms: results,
        page: 1
      })
    );
  } catch (e) {}
};

export default roomsSlice.reducer;
