import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Button = styled.View`
  margin-bottom: 25px;
  border: 1px solid ${props => (props.accent ? "transparent" : colors.black)};
  border-radius: 30px;
  padding: 12.5px 0px;
  align-items: center;
  width: ${width / 1.5}px;
  background-color: ${props => (props.accent ? colors.red : "transparent")};
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: ${props => (props.accent ? "white" : colors.black)};
`;

const Btn = ({ onPress, text, accent = false }) => (
  <TouchableOpacity onPress={onPress}>
    <Button accent={accent}>
      <Text accent={accent}>{text}</Text>
    </Button>
  </TouchableOpacity>
);

Btn.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool
};

export default Btn;
