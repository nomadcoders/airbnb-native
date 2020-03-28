import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";

const RoomCard = ({ id, isFav, isSuperHost, photos, name, price }) => null;

RoomCard.propTypes = {
  id: Pt.number.isRequired,
  isFav: Pt.bool.isRequired,
  isSuperHost: Pt.bool.isRequired,
  photos: Pt.arrayOf(
    Pt.shape({
      file: Pt.string
    })
  ),
  name: Pt.string.isRequired,
  price: Pt.number.isRequired
};

export default RoomCard;
