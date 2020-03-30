import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import utils from "../utils";
import { useDispatch } from "react-redux";
import { toggleFav } from "../redux/usersSlice";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";
import RoomPhotos from "./RoomPhotos";

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
  position: relative;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`;

const Superhost = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const PriceText = styled.Text`
  font-size: 16px;
`;

const PriceNumber = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const FavButton = styled.View`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const TOpacity = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 10px;
`;

function getIconName(isFav) {
  const isAndroid = utils.isAndroid();
  if (isAndroid) {
    if (isFav) {
      return "md-heart";
    }
    return "md-heart-empty";
  } else {
    if (isFav) {
      return "ios-heart";
    }
    return "ios-heart-empty";
  }
}

const RoomCard = ({ id, isFav, isSuperHost, photos, name, price, roomObj }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Container>
      <TOpacity onPress={() => dispatch(toggleFav(id))}>
        <FavButton>
          <Ionicons
            size={28}
            color={isFav ? colors.red : "black"}
            name={getIconName(isFav)}
          />
        </FavButton>
      </TOpacity>
      <RoomPhotos photos={photos} />
      <TouchableOpacity
        style={{ alignItems: "flex-start" }}
        onPress={() => navigation.navigate("RoomDetail", { ...roomObj })}
      >
        {isSuperHost ? (
          <Superhost>
            <SuperhostText>Superhost</SuperhostText>
          </Superhost>
        ) : null}
        <Name>{name}</Name>
        <PriceContainer>
          <PriceNumber>${price}</PriceNumber>
          <PriceText> / night</PriceText>
        </PriceContainer>
      </TouchableOpacity>
    </Container>
  );
};

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
  price: Pt.number.isRequired,
  roomObj: Pt.object.isRequired
};

export default RoomCard;
