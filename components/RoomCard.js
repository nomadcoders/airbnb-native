import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-web-swiper";
import utils from "../utils";
import { useDispatch } from "react-redux";
import { toggleFav } from "../redux/usersSlice";
import colors from "../colors";

const { width, height } = Dimensions.get("screen");

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

const PhotosContainer = styled.View`
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
  height: ${height / 4}px;
  border-radius: 4px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
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

const RoomCard = ({ id, isFav, isSuperHost, photos, name, price }) => {
  const dispatch = useDispatch();
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
      <PhotosContainer>
        {photos.length === 0 ? (
          <SlideImage
            resizeMode="repeat"
            source={require("../assets/roomDefault.jpeg")}
          />
        ) : (
          <Swiper
            controlsProps={{
              PrevComponent: () => null,
              NextComponent: () => null,
              dotActiveStyle: {
                backgroundColor: "white"
              }
            }}
          >
            {photos.map(photo => (
              <View key={photo.id}>
                <SlideImage source={{ uri: photo.file }} />
              </View>
            ))}
          </Swiper>
        )}
      </PhotosContainer>
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
  price: Pt.number.isRequired
};

export default RoomCard;
