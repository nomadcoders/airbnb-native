import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const isAndroid = Platform.OS === "android";

const Container = styled.View`
  padding-left: 20px;
`;

export default () => (
  <Container>
    <Ionicons name={isAndroid ? "md-arrow-down" : "ios-arrow-down"} size={28} />
  </Container>
);
