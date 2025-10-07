import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "#ccc",
          backgroundColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/home-active.png")
                  : require("../../assets/images/home-inactive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/favorites-active.png")
                  : require("../../assets/images/favorites-inactive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/profile-active.png")
                  : require("../../assets/images/profile-inactive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
