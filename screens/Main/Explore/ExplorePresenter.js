import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, ScrollView } from "react-native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <ScrollView
          style={{ width: "100%", marginTop: 120 }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {rooms.map(room => (
            <RoomCard
              key={room.id}
              name={room.name}
              price={room.price}
              photos={room.photos}
              id={room.id}
              isFav={room.is_fav}
              isSuperHost={room.user.superhost}
            />
          ))}
        </ScrollView>
      )}
    </Container>
  );
};
