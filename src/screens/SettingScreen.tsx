import { RouteProp } from "@react-navigation/native";
import { View, Text } from "react-native";
import React from 'react';


interface UserProps {
  route: RouteProp<any, any>;
}
export const SettingScreen = ({ route }: UserProps) => {
  return (
    <View>
      <Text>設定画面</Text>
      {/* <Text>id: {route?.params?.userId}</Text> */}
    </View>
  );
};
