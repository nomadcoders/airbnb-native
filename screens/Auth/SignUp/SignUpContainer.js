import React, { useState } from "react";
import utils from "../../utils";
import api from "../../api";
import SignUpPresenter from "./SignUpPresenter";

export default ({ navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isFormValid = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("All fields are required.");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Please add a valid email.");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    try {
      const { status } = await api.createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password
      });
      if (status === 201) {
        alert("Account created. Sign in, please.");
        navigate("SignIn", { email, password });
      }
    } catch (e) {
      alert("The email is taken");
    } finally {
      setLoading(false);
    }
  };
  return (
    <SignUpPresenter
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};
