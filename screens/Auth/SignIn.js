import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const TextInput = styled.TextInput``;

export default () => {
  const handleSubmit = () => alert("Sending data...");
  return (
    <Container>
      <TextInput placeholder="Username"></TextInput>
      <TextInput placeholder="Password" secureTextEntry></TextInput>
      <Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
    </Container>
  );
};
