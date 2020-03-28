import React, { useEffect, useState } from "react";
import ExplorePresenter from "./ExplorePresenter";

export default ({ getRooms, rooms, increasePage, page }) => {
  useEffect(() => {
    getRooms(1);
  }, []);
  useEffect(() => {
    getRooms(page);
  }, [page]);
  return <ExplorePresenter rooms={rooms} increasePage={increasePage} />;
};
