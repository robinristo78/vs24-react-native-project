import React from "react";
import { View } from "react-native";

import Splash from "./Splash";

const WEB_CLIENT_ID = "1070405487617-tkdjree8p845csfhergldcd0426mvrkd.apps.googleusercontent.com";
const IOS_CLIENT_ID = "1070405487617-i833b5a9lr54uqa3dv4tugbte7c7k7rp.apps.googleusercontent.com";

export const options = {
  headerShown: false, // hides the top header
};

const App = () => {
  return (
    <Splash />
  );
}

export default App;