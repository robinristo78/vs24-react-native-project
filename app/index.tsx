import React from "react";
import { View } from "react-native";
import Splash from "./Splash";
import SignUp from "./SignUp";

const WEB_CLIENT_ID = "1070405487617-tkdjree8p845csfhergldcd0426mvrkd.apps.googleusercontent.com";
const IOS_CLIENT_ID = "1070405487617-i833b5a9lr54uqa3dv4tugbte7c7k7rp.apps.googleusercontent.com";

const App = () => {
  return (
    <View>
      <Splash />
      {/* <SignUp /> */}
    </View>
  );
}

export default App;