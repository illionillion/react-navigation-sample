import { NavigationProp, RouteProp } from "@react-navigation/native";
import { View, Text } from "react-native";
import React from 'react';
import { Counter } from "../components/Counter";

export interface UserProps {
  route: RouteProp<any, any>;
  navigation: NavigationProp<any, any>;
}
export const UserScreen = ({ route, navigation }: UserProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ユーザー画面</Text>
      <Text>id: {route?.params?.userId}</Text>
      <Counter/>
    </View>
  );
};
