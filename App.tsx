import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { UserScreen } from "./src/screens/UserScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { SettingScreen } from "./src/screens/SettingScreen";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          // options={{ headerShown: false }}
          options={{
            title: "ホーム画面",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          // options={({ route }) => ({
          //   title: `ユーザID${route?.params?.userId}の画面`,
          // })}
          options={{
            title: "ユーザー画面",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: "設定画面",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
