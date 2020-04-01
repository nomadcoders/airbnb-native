import React, { useState, useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import MapPresenter from "./MapPresenter";

const { width, height } = Dimensions.get("screen");

export default ({ rooms }) => {
  const mapRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onScroll = e => {
    const {
      nativeEvent: {
        contentOffset: { x }
      }
    } = e;
    const position = Math.abs(Math.round(x / width));
    setCurrentIndex(position);
  };
  const moveMap = () => {
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: parseFloat(rooms[currentIndex].lat),
          longitude: parseFloat(rooms[currentIndex].lng)
        }
      },
      { duration: 3000 }
    );
  };
  useEffect(() => {
    if (currentIndex !== 0) {
      moveMap();
    }
  }, [currentIndex]);
  const onRegionChangeComplete = async () => {
    try {
      const { northEast, southWest } = await mapRef.current?.getMapBoundaries();
      console.log(northEast, southWest);
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <MapPresenter
      rooms={rooms}
      mapRef={mapRef}
      currentIndex={currentIndex}
      onScroll={onScroll}
      onRegionChangeComplete={onRegionChangeComplete}
    />
  );
};
