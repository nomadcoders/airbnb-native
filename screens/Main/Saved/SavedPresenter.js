import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 80px;
  padding: 0px 30px;
`;

const SV = styled.ScrollView``;

const Title = styled.Text`
  font-size: 36px;
`;

export default () => (
  <Container>
    <Title>Favourites</Title>
    <SV></SV>
  </Container>
);
