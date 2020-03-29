import React, { useEffect } from "react";
import SavedPresenter from "./SavedPresenter";

export default ({ getFavs }) => {
  useEffect(() => {
    getFavs();
  }, []);
  return <SavedPresenter />;
};
