import React from "react";
import { View, Pressable, Image } from "react-native";
import { useRouter, usePathname } from "expo-router";
import styles from "./styles";

const ICONS = [
  {
    name: "Home",
    active: require("../../assets/images/home-active.png"),
    inactive: require("../../assets/images/home-inactive.png"),
  },
  {
    name: "Favorites",
    active: require("../../assets/images/favorites-active.png"),
    inactive: require("../../assets/images/favorites-inactive.png"),
  },
  {
    name: "Profile",
    active: require("../../assets/images/profile-active.png"),
    inactive: require("../../assets/images/profile-inactive.png"),
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // current route

  return (
    <View style={styles.container}>
      {ICONS.map((icon) => {
        const focused = pathname.includes(icon.name);

        return (
          <Pressable
            key={icon.name}
            onPress={() => {
                console.log(pathname);
                console.log(icon.name);
                (pathname !== `/auth/${icon.name}`) ? router.push(`/auth/${icon.name}`) : null;
            
            }}
            style={styles.iconWrapper}
          >
            <Image
              source={focused ? icon.active : icon.inactive}
              style={styles.icon}
            />
          </Pressable>
        );
      })}
    </View>
  );
}