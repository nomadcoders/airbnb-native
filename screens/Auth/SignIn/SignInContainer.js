import React, { useState } from "react";
import utils from "../../../utils";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/usersSlice";
import SignInPresenter from "./SignInPresenter";

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email || "itnicolasme@gmail.com");
  const [password, setPassword] = useState(params?.password || "12");
  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("All fields are required.");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Email is invalid");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(
      userLogin({
        username: email,
        password
      })
    );
  };
  return (
    <SignInPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
