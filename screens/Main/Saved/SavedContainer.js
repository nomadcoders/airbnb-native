import React, { useEffect } from "react";
import SavedPresenter from "./SavedPresenter";

export default ({ getFavs, rooms }) => {
  useEffect(() => {
    getFavs();
  }, []);
  return <SavedPresenter rooms={rooms} />;
};
